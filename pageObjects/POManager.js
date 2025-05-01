const { homePage } = require("./homePage");
const { loginPage } = require("./loginPage");
class POManager {

    constructor(page){

        this.page = page;
        this.loginPage = new loginPage(page);
        this.homePage = new homePage(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getHomePage(){
        return this.homePage;
    }
}
module.exports = {POManager};