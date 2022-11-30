const { chromium } = require("playwright");

(async () => {
  //function code
  const browser = await chromium.launch({ headless: false, slowMo: 75 });
  const page = await browser.newPage();
  await page.goto("https://www.airbnb.mx/");
  await browser.close();
})();
