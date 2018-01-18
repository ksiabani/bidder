import puppeteer from 'puppeteer';
import * as constants from '../constants';

const biddersRoute = 'http://localhost:3000/bidders';
const biddersMock = [
    {
        "id": "e7fe51ce-4f63-7687-6353-ff0961c2eb0d",
        "name": "Bidder 1",
        "endpoint": "https://mybidder.com/bids",
        "state": "CREATED"
    },
    {
        "id": "d7f4f63e-c2cb-7687-c2cb-ff6353c2cb0e",
        "name": "Bidder 2",
        "endpoint": "https://test.bidder.com/bids",
        "state": "LIVE"
    },
    {
        "id": "ff0961c2-4f63-7687-6353-fd7f4f63eb0b",
        "name": "Bidder 3",
        "endpoint": "https://mybidrequest.my-example-bidder-endpoint.com/bidsRequests/id/12345689/987654321/000076",
        "state": "LIVE"
    }
];
const biddersMockCreated = biddersMock.filter(bidder => bidder.state === "CREATED");
const biddersMockLive = biddersMock.filter(bidder => bidder.state === "LIVE");
const viewportWidth = 1920;
const viewportHeight = 1080;
let page;
let browser;


beforeAll(async () => {
    // Setup and launch Puppeteer
    browser = await puppeteer.launch({
        headless: true,
        slowMo: 80,
        args: [`--window-size=${viewportWidth},${viewportHeight}`]
    });
    page = await browser.newPage();
    await page.setRequestInterception(true);

    // Intercept API response and pass mock data
    page.on('request', request => {
        if (request.url === constants.API) {
            request.respond({
                content: 'application/json',
                headers: {"Access-Control-Allow-Origin": "*"},
                body: JSON.stringify(biddersMock)
            });
        }
        else {
            request.continue();
        }
    });

    // Set viewport dimensions
    await page.setViewport({width: viewportWidth, height: viewportHeight});

    // Visit bidders route
    await page.goto(biddersRoute, {
        waitUntil: 'domcontentloaded'
    });
});


// add test to check for route
// fetchSpy
describe('Bidder list', () => {

    it('visits the bidders list route', async () => {
        expect(page.url()).toEqual(biddersRoute);
    });

    it('can see a list of bidders', async () => {
        await page.waitForSelector('[data-testid="CREATED"], [data-testid="LIVE"]');
    });

    it('shows the correct number of bidders', async () => {
        const noOfBidders = await page.$$eval('[data-testid="bidder"]', bidders => bidders.length);
        expect(noOfBidders).toEqual(biddersMock.length);
    });

    it('shows the correct number of submitted bidders', async () => {
        const noOfCreatedBidders = await page.$$eval('[data-testid="CREATED"] [data-testid="bidder"]', bidders => bidders.length);
        expect(noOfCreatedBidders).toEqual(biddersMockCreated.length);
    });

    it('shows the correct number of live bidders', async () => {
        const noOfLiveBidders = await page.$$eval('[data-testid="LIVE"] [data-testid="bidder"]', bidders => bidders.length);
        expect(noOfLiveBidders).toEqual(biddersMockLive.length);
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

    it("information for the last \"live\" bidder is displayed correctly", async () => {

        // Prepate selector for "name" and "endpoint" elements
        const nameSelector = '[data-testid="LIVE"] [data-testid="bidderName"]';
        const endpointSelector = '[data-testid="LIVE"] [data-testid="bidderEndpoint"]';

        // Make sure all elements are mounted
        await page.waitForSelector(nameSelector, endpointSelector);

        // Get text for the last of each element that match each selector
        const name = await page.$$eval(nameSelector, names => names[names.length - 1].innerHTML);
        const endpoint = await page.$$eval(endpointSelector, names => names[names.length - 1].innerHTML);

        // Assert against mock data
        expect(name).toBe(biddersMockLive[biddersMockLive.length - 1].name);
        expect(endpoint).toBe(biddersMockLive[biddersMockLive.length - 1].endpoint);

    });


});

afterAll(async () => {
    browser.close();
});
