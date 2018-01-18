const puppeteer = require('puppeteer');

// test.skip('First test', async () =>  {
//     let browser = await puppeteer.launch({
//         headless: false,
//     });
//     let page = await browser.newPage();
//
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.side-menu-layout__header--bidder h3');
//
//     const html = await page.$eval('.side-menu-layout__header--bidder h3', e => e.innerHTML);
//     expect(html).toBe(' BIDDERS ');
//
//     browser.close();
// }, 16000);

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
const apiUrl = 'https://private-anon-57b3da0554-biddermanagement.apiary-mock.com/bidders';
let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {

    // Setup and launch Puppeteer
    browser = await puppeteer.launch({
        headless: true,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
        if (request.url === apiUrl) {
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
    await page.setViewport({width, height});
    await page.goto(biddersRoute, {
        waitUntil: 'domcontentloaded'
    });
});


it("the first submitted bidder should be displayed correctly", async () => {
    const name = '.bidders__cols .bidder-list:first-child .bidder__name';
    await page.waitForSelector(name);
    const html = await page.$eval(name, e => e.innerHTML);
    console.log(html);
    expect(html).toBe(biddersMockCreated[0].name);
});


afterAll(async () => {
    browser.close();
});
