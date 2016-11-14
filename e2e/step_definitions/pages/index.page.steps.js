"use strict";
var index_page_1 = require('../../support/pages/index.page');
var protractor_1 = require('protractor');
var chai_1 = require('chai');
module.exports = function () {
    //let chai = require('chai').use(require('chai-as-promised'));
    //let expect = chai.expect;
    this.Given(/^I open home page$/, function () {
        return index_page_1.IndexPage.openPage();
    });
    this.When(/^I wait to load page$/, function () {
        return index_page_1.IndexPage.waitPage();
    });
    this.When(/^page is loaded$/, function () {
        return chai_1.expect(protractor_1.browser.getTitle()).to.eventually.equal(index_page_1.IndexPage.title);
    });
};
//# sourceMappingURL=index.page.steps.js.map