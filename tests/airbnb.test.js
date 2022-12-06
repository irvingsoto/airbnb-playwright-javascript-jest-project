// https://jestjs.io/docs/expect
const { chromium } = require("playwright");
const HomePage = require("../pages/Home.page");
const PlacePage = require("../pages/Place.page");
require("dotenv").config("./.env");

describe("Enzyme Interview_tae", () => {
  jest.setTimeout(100000);
  let browser = null;
  let context = null;
  let page = null;
  let homePage = null;
  let placeDetailsPage = null;

  beforeAll(async () => {
    //launch browser and navigate to the home page
    browser = await chromium.launch({ headless: false, slowMo:500 });
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.navigate();
    placeDetailsPage = new PlacePage(page);
  });

  test("User searches, check place pictures and verify cancellation policy", async () => {
    console.log("Step #1 Navigate to https://www.airbnb.mx/");
    await homePage.verifyPageIsLoading();
    console.log("Step #2 Search for a place with filer criteria");
    await homePage.searchPlace(process.env.PLACE_TO_SEARCH);
    console.log("Step #3 Click on one of the places");
    await placeDetailsPage.ClickOnPlace();
    console.log("Step #4 Verify user can look at the pictures");
    await placeDetailsPage.lookAtThePictures();
    console.log("Step #5 Verify place has a cancellation policy");
    await placeDetailsPage.verifyCancellationPolicy();
  });

  afterAll(async () => {
    // closing browser
    await context.close();
    await browser.close();
  });
});
