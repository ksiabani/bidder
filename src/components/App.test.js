import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import puppeteer from 'puppeteer';
import * as constants from '../constants';
import App from './App';

const biddersRoute = 'http://localhost:3000/bidders';
const biddersMockCreated = constants.biddersMock.filter(bidder => bidder.state === "CREATED");
const biddersMockLive = constants.biddersMock.filter(bidder => bidder.state === "LIVE");

let page;
let browser;

beforeAll(async () => {

    // Jasmine's default timeout
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

    // Catch and mock Fetch calls for Jest
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: function () {
                    return constants.biddersMock;
                }
            });
        });
    });

    // Setup Puppeteer
    browser = await puppeteer.launch(
        process.env.REACT_APP_DEBUG === "true"
            ? {
                headless: false,
                slowMo: 100
            }
            : {}
    );
    page = await browser.newPage();

    // Intercept API response and pass mock data for Puppeteer
    await page.setRequestInterception(true);
    page.on('request', request => {
        if (request.url === constants.API) {
            request.respond({
                content: 'application/json',
                headers: {"Access-Control-Allow-Origin": "*"},
                body: JSON.stringify(constants.biddersMock)
            });
        }
        else {
            request.continue();
        }
    });

    // Visit bidders route
    await page.goto(biddersRoute, {
        waitUntil: 'domcontentloaded'
    });

});

describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>, div);
    });

});

describe('Bidder list', () => {

    it('visits the bidders list route', async () => {
        expect(page.url()).toEqual(biddersRoute);
    });

    it('can see a list of bidders', async () => {
        await page.waitForSelector('[data-testid="CREATED"], [data-testid="LIVE"]');
    });

    it('shows the correct number of bidders', async () => {
        const noOfBidders = await page.$$eval('[data-testid="bidder"]', bidders => bidders.length);
        expect(noOfBidders).toEqual(constants.biddersMock.length);
    });

    it("information for the first \"submitted\" bidder is displayed correctly", async () => {

        // Prepate selector for "name" and "endpoint" elements
        const nameSelector = '[data-testid="CREATED"] [data-testid="bidderName"]';
        const endpointSelector = '[data-testid="CREATED"] [data-testid="bidderEndpoint"]';

        // Make sure all elements are mounted
        await page.waitForSelector(nameSelector, endpointSelector);

        // Get text for the first of each element that match each selector
        const name = await page.$$eval(nameSelector, names => names[0].innerHTML);
        const endpoint = await page.$$eval(endpointSelector, names => names[0].innerHTML);

        // Assert against mock data
        expect(name).toBe(biddersMockCreated[0].name);
        expect(endpoint).toBe(biddersMockCreated[0].endpoint);

    });

});

describe('Bidder', () => {

    test('user is redirected to the edit route for that bidder', async () => {

        // Get href for first bidder (by evaluating href of first anchor)
        const editRoute = await page.$$eval('a[data-testid="bidder"]', bidders => bidders[0].href);

        // Click first bidder
        await page.click('a[data-testid="bidder"]');

        // Wait for bidder form to show up in the destination url
        await page.waitForSelector('.bidder-form');

        // Get current url
        const currentRoute = await page.evaluate(() => location.href);

        // The two urls should be the same
        expect(currentRoute).toEqual(editRoute);
    });

    test('edit bidder and save', async () => {

        // Wait for bidder form to show up in the destination url
        await page.waitForSelector('[data-testid="bidderForm"]');

        // Clear name input
        await page.evaluate(() => {
            document.querySelector('[data-testid="inputNameBidder"]').value = ''
        });

        // Type new name for bidder
        await page.type('[data-testid="inputNameBidder"]', 'My Bidder', {delay: 100});

        // Submit form
        await page.click('[data-testid="bidderSubmitButton"]');

        // Wait for bidders page
        await page.waitForSelector('[data-testid="bidders"]')
    })
});


afterAll(async () => {
    browser.close()
});
