const BasePage = require('./Base.page');
class HomePage extends BasePage {
    constructor(page){
        // calling the parent class BasePage constructor - inheritance
        super(page);
    }
    /**
     * Method to navigate to home page using parent's method
     */
     async navigate(){
        await super.navigate(); 
    }
}
module.exports = HomePage;