"use strict";
/**
 * Created by olga on 9.11.16.
 */
var app_component_1 = require('../../support/components/app.component');
var search_component_1 = require('../../support/components/search.component');
var chai_1 = require('chai');
module.exports = function () {
    var searchComponent;
    var appComponent;
    this.Before(function () {
        appComponent = new app_component_1.AppComponent();
        searchComponent = new search_component_1.SearchComponent();
    });
    this.When(/^I click on careers menu$/, function () {
        appComponent.clickOnMenuTabs("careers");
    });
    this.Then(/^I enter '([^"]*)'$/, function (search) {
        return searchComponent.getAutocomplete(search);
    });
    this.Then(/^I see '([^"]*)' vacancy$/, function (autocomplete) {
        return chai_1.expect(searchComponent.autocomplete.getText()
            .then(function (text) {
            return text.toLowerCase();
        })).to.eventually.contain(autocomplete);
    });
    this.Then(/^I reopen page$/, function () {
        return appComponent.clickOnMenuTabs("careers");
    });
    this.When(/^I enter '([^"]*)' vacancy$/, function (text) {
        return searchComponent.enterVacancyToSearchInput(text);
    });
    this.Then(/^I click to find$/, function () {
        searchComponent.button_search.click();
        return searchComponent.waitingLoadingPage();
    });
    this.Then(/^I check result '([^"]*)'$/, function (search) {
        return chai_1.expect(searchComponent.result.getText()
            .then(function (text) {
            return text.toLowerCase();
        })).to.eventually.contain(search);
    });
};
//# sourceMappingURL=job.search.js.map