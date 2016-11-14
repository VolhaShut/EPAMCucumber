"use strict";
/**
 * Created by olga on 9.11.16.
 */
var protractor_1 = require('protractor');
var SearchComponent = (function () {
    function SearchComponent() {
        this.button_careers = protractor_1.element(protractor_1.by.css('ul.tile-menu > li:nth-child(5) > a'));
        this.input_search = protractor_1.element(protractor_1.by.css('.job-search-input'));
        this.autocomplete = protractor_1.element(protractor_1.by.className('autocomplete-suggestion'));
        this.button_search = protractor_1.element(protractor_1.by.css('.job-search-button.location-search-submit'));
        //   result=element(by.css('ul.search-result-list>li:nth-child(1)> div > a'));
        this.search_for = protractor_1.element(protractor_1.by.className('searched-for'));
        this.result = protractor_1.element(protractor_1.by.className('position-name hot'));
        this.submitBtn = protractor_1.element(protractor_1.by.className('section-ui section-color-white   section-padding-small'));
    }
    SearchComponent.prototype.scrollIntoSubmitBtnView = function () {
        return protractor_1.browser.executeScript('arguments[0].scrollIntoView(true);', this.submitBtn.getWebElement());
    };
    ;
    SearchComponent.prototype.enterVacancyToSearchInput = function (vacancy) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.submitBtn), 30000);
        this.scrollIntoSubmitBtnView();
        this.input_search.click();
        return this.input_search.sendKeys(vacancy);
    };
    ;
    SearchComponent.prototype.waitingLoadingPage = function () {
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.result), 30000);
    };
    SearchComponent.prototype.getAutocomplete = function (vacancy) {
        this.scrollIntoSubmitBtnView();
        this.input_search.click();
        this.input_search.sendKeys(vacancy);
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.autocomplete), 30000);
    };
    SearchComponent.prototype.getAutocompleteText = function () {
        return this.autocomplete.getText();
    };
    SearchComponent.prototype.getResultText = function () {
        return this.result.getText();
    };
    SearchComponent.prototype.clickToFind = function () {
        this.button_search.click();
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.result), 30000);
    };
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map