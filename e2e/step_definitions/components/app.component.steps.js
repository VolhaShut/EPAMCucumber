"use strict";
var app_component_1 = require('../../support/components/app.component');
var protractor_1 = require('protractor');
module.exports = function () {
    // let chai = require('chai').use(require('chai-as-promised'));
    // let expect = chai.expect;
    var appComponent;
    this.Before(function () {
        appComponent = new app_component_1.AppComponent();
    });
    this.When(/^app.component is loaded$/, function () {
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(appComponent.menu), 15000);
    });
};
//# sourceMappingURL=app.component.steps.js.map