const { chromium } = require('playwright');
const HomePage = require('../pages/Home.page');

describe('Airbnb Test_01', () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
      jest.setTimeout(30000);
      let browser = null;
      let context = null;
      let page = null;
      let homePage  = null;

    // runs before all tests
    beforeAll( async ()=>{
      //launch browser and navigate to the Airbnb home page
      browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.navigate();
  });

    // runs after all tests
    afterAll(async() =>{
       await browser.close();
    });
    
    test('Home Page loads succesfully', async() =>{
        // assertions
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });
});