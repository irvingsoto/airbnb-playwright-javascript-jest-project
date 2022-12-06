const BasePage = require("./Base.page");
const {ClassicRunner, Eyes, Target, RectangleSize} = require("@applitools/eyes-playwright");
let page1 = null;

class PlacePage extends BasePage {
  constructor(page) {
    super(page);
    // web element selectors
    this.place = page.locator(".rfexzly");
  }

  async ClickOnPlace() {
    [page1] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.place.first().click(),
    ]);
    await page1.getByRole("button", { name: "Cerrar" }).click();
    if (
      await page1
        .getByRole("button", { name: "Mostrar todas las fotos" })
        .filter({ hasText: "Mostrar todas las fotos" })
        .isVisible()
    ) {
      console.log("Place details plage is displayed");
    } else {
      throw new Error("Place details plage is NOT displayed");
    }
  }

  async lookAtThePictures() {
    try {
      page1
        .getByRole("button", { name: "Mostrar todas las fotos" })
        .filter({ hasText: "Mostrar todas las fotos" })
        .click();
      const eyes = new Eyes(new ClassicRunner());
      await eyes.open(
        page1,
        "Airbnb Place Details Page",
        "Place pictures are available",
        new RectangleSize(800, 600)
      );
      await eyes.check(Target.window().fully());
      await eyes.close();
      await page1.getByRole("button", { name: "Cerrar" }).click();
      console.log("Place pictures are available");
    } catch (error) {
      console.error(error);
      throw new Error("Place pictures are NOT available");
    }
  }

  async verifyCancellationPolicy() {
    const cancellationPolicy = await page1.getByRole("heading", {
      name: "Política de cancelación",
    });
    await cancellationPolicy.hover();
    if (await cancellationPolicy.isVisible()) {
      await page1.screenshot({
        path: "screenshot/Cancellation-Policy.png",
      });
      console.log("The cancellation policy is displayed");
    } else {
      throw new Error("The cancellation policy is NOT displayed");
    }
  }
}
module.exports = PlacePage;
