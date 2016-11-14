"use strict";
var protractor_1 = require('protractor');
var IndexPage = (function () {
    function IndexPage() {
    }
    IndexPage.openPage = function () {
        protractor_1.browser.get('https://www.epam.com/');
    };
    IndexPage.waitPage = function () {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.menubar), 30000);
    };
    IndexPage.title = 'EPAM | Software Product Development Services';
    IndexPage.menubar = protractor_1.element(protractor_1.by.className('tile-menu'));
    return IndexPage;
}());
exports.IndexPage = IndexPage;
//# sourceMappingURL=index.page.js.map