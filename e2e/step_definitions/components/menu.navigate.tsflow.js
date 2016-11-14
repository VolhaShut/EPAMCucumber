"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var chai_1 = require('chai');
var app_component_1 = require('../../support/components/app.component');
var appComponent;
var cucumber_tsflow_1 = require('cucumber-tsflow');
var MenuSteps = (function () {
    function MenuSteps() {
    }
    MenuSteps.prototype.beforeAllScenarios = function () {
        appComponent = new app_component_1.AppComponent();
    };
    MenuSteps.prototype.clickingOnMenuTabs = function (menu, callback) {
        appComponent.clickOnMenuTabs(menu);
        callback();
    };
    ;
    MenuSteps.prototype.expectingTitle = function (title, callback) {
        chai_1.expect(appComponent.getTitle()).to.eventually.equal(title).and.notify(callback);
    };
    ;
    __decorate([
        cucumber_tsflow_1.before(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MenuSteps.prototype, "beforeAllScenarios", null);
    __decorate([
        cucumber_tsflow_1.when(/^I click to '([^"]*)' on menu tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], MenuSteps.prototype, "clickingOnMenuTabs", null);
    __decorate([
        cucumber_tsflow_1.then(/^I expect to see '([^"]*)' page tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], MenuSteps.prototype, "expectingTitle", null);
    MenuSteps = __decorate([
        cucumber_tsflow_1.binding(), 
        __metadata('design:paramtypes', [])
    ], MenuSteps);
    return MenuSteps;
}());
module.exports = MenuSteps;
//# sourceMappingURL=menu.navigate.tsflow.js.map