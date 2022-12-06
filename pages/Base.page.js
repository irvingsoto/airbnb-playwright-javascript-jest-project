require("dotenv").config("./.env");

class BasePage {
  constructor(page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto(process.env.BASE_URL);
  }
}
module.exports = BasePage;