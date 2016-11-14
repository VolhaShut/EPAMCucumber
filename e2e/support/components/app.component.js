"use strict";
var protractor_1 = require('protractor');
var AppComponent = (function () {
    function AppComponent() {
        this.menu = protractor_1.element(protractor_1.by.className('tile-menu'));
        this.solutions = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:first-child > a'));
        this.industries = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(2) > a'));
        this.about = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(3) > a'));
        this.ideas = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(4) > a'));
        this.careers = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(5) > a'));
        this.contact = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(6) > a'));
    }
    // title_solutions='Solutions';
    // title_industries='Industries';
    // title_about='About';
    // title_ideas='Ideas';
    // title_careers='Careers';
    // title_contact='Contact';
    AppComponent.prototype.getTitle = function () {
        return protractor_1.browser.getTitle();
    };
    AppComponent.prototype.clickOnMenuTabs = function (text) {
        switch (text) {
            case "solutions":
                this.solutions.click();
                this.solutions.click();
                break;
            case "industries":
                this.industries.click();
                this.industries.click();
                break;
            case "about":
                this.about.click();
                this.about.click();
                break;
            case "ideas":
                this.ideas.click();
                break;
            case "careers":
                this.careers.click();
                break;
            case "contact":
                this.contact.click();
                break;
        }
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map