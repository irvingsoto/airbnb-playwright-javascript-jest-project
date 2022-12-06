const BasePage = require("./Base.page");
require("dotenv").config("./.env");

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // web element selectors
    this.closeButton = page.getByRole("button", { name: "Cerrar" });
    this.searchButton = page.getByRole("button", {
      name: "Huéspedes ¿Cuántos?",
    });
    this.searchInputField = page.getByTestId(
      "structured-search-input-field-query"
    );
    this.searchOption = page
      .getByTestId("option-0")
      .getByText(process.env.PLACE_TO_SEARCH);
    this.nextMothArrow = page.locator(
      "#panel--tabs--0 > div > div.dhjkeof.dir.dir-ltr > div > div > div > div > div._14676s3 > div._5neba7a > div._qz9x4fc > button"
    );
    this.month = page.getByRole("heading", { name: process.env.DATE });

    this.guestsButton = page.getByTestId(
      "structured-search-input-field-guests-button"
    );
    this.adultsIncreaseButton = page.getByTestId(
      "stepper-adults-increase-button"
    );
    this.childrenIncreaseButton = page.getByTestId(
      "stepper-children-increase-button"
    );
    this.petsIncreaseButton = page.getByTestId("stepper-pets-increase-button");
    this.petsIncreaseButton = page.getByTestId("stepper-pets-increase-button");
    this.filteredSearchButton = page.getByTestId(
      "structured-search-input-search-button"
    );
    this.checkInDateSelector = page.locator(
      "div:nth-child(3) > ._ytfarf > ._cvkwaj > tbody > tr > ._61wmwdf"
    );
    this.checkOutDateSelector = page.locator(
      "div:nth-child(3) > ._ytfarf > ._cvkwaj > tbody > tr:nth-child(2) > td:nth-child(6)"
    );

    this.filterButton = page.getByRole("button", { name: "Filtros" });
    this.maxPrice = page.getByLabel("precio máximo$");
    this.showPlacesButton = page.locator(
      "body > div:nth-child(79) > section > div > div > div._z4lmgp > div > div._z4lmgp > div > footer > div > div > div > div > footer > a"
    );
    this.placeResult = page.locator(".rfexzly");
  }

  /**
   * Method to navigate to home page using parent's method
   */
  async navigate() {
    await super.navigate();
  }

  async verifyPageIsLoading() {
    try {
      expect(this.page).not.toBeNull();
      expect(await this.page.title()).not.toBeNull();
      console.log("Home Page loads successfully");
    } catch (error) {
      console.error(error);
      throw new Error("List of places is NOT displayed");
    }
  }

  async searchPlace(place) {
    try {
      await this.closeButton.click();
      await this.searchButton.click();
      await this.searchInputField.click();
      await this.searchInputField.fill(place);
      await this.searchOption.click();
      for (let i = 0; i <= 12; i++) {
        await this.nextMothArrow.click();
        if (await this.month.isVisible()) {
          break;
        }
      }
      await this.checkInDateSelector.first().click();
      await this.checkOutDateSelector.first().click();
      await this.guestsButton.click();
      await this.adultsIncreaseButton.dblclick();
      await this.childrenIncreaseButton.dblclick();
      await this.petsIncreaseButton.click();
      await this.filteredSearchButton.click();
      await this.filterButton.click();
      await this.maxPrice.click();
      await this.maxPrice.fill("4000");
      await this.showPlacesButton.click();
      if (await this.placeResult.first().isVisible()) {
        console.log("List of places is displayed");
      } else {
        console.log("List of places is NOT displayed");
      }
    } catch (error) {
      console.error(error);
      throw new Error("List of places is NOT displayed");
    }
  }
}
module.exports = HomePage;
