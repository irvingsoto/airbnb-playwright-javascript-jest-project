const { chromium } = require("playwright");

describe('Airbnb Test_01', () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
    jest.setTimeout(10000);
    
    let browser = null;
    let page = null;
    let context = null;

    // runs before all tests
    beforeAll(async() =>{
      browser = await chromium.launch();
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto('https://www.airbnb.mx/');
    });

    // runs after all tests
    afterAll(async() =>{
       await browser.close();
    });
    
    test('Page loads succesfully', async() =>{
        // assertions
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });
});