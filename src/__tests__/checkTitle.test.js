const puppeeter = require('puppeteer');

test('First test', async () =>  {
    let browser = await puppeeter.launch({
        headless: false,
    });
    let page = await browser.newPage();

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.side-menu-layout__header--bidder h3');

    const html = await page.$eval('.side-menu-layout__header--bidder h3', e => e.innerHTML);
    expect(html).toBe(' BIDDERS ');

    browser.close();
}, 16000);