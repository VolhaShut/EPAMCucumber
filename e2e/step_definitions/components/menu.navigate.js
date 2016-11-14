"use strict";
/**
 * Created by olga on 9.11.16.
 */
var app_component_1 = require('../../support/components/app.component');
var chai_1 = require('chai');
module.exports = function () {
    // let chai = require('chai').use(require('chai-as-promised'));
    // let expect = chai.expect;
    var appComponent;
    this.Before(function () {
        appComponent = new app_component_1.AppComponent();
    });
    this.When(/^I click to '([^"]*)' on menu$/, function (menu) {
        appComponent.clickOnMenuTabs(menu);
    });
    this.Then(/^I expect to see '([^"]*)' page$/, function (title) {
        return chai_1.expect(appComponent.getTitle()).to.eventually.equal(title);
    });
};
//# sourceMappingURL=menu.navigate.js.map