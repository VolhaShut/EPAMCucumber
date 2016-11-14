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
var protractor_1 = require("protractor");
var cucumber_tsflow_1 = require('cucumber-tsflow');
var app_component_1 = require('../../support/components/app.component');
var appComponent;
var AppComponentSteps = (function () {
    function AppComponentSteps() {
    }
    AppComponentSteps.prototype.beforeAllScenarios = function () {
        appComponent = new app_component_1.AppComponent();
    };
    AppComponentSteps.prototype.headingIsLoaded = function (callback) {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(appComponent.menu), 15000);
        callback();
    };
    ;
    __decorate([
        cucumber_tsflow_1.before(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponentSteps.prototype, "beforeAllScenarios", null);
    __decorate([
        cucumber_tsflow_1.then(/^app.component is loaded tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], AppComponentSteps.prototype, "headingIsLoaded", null);
    AppComponentSteps = __decorate([
        cucumber_tsflow_1.binding(), 
        __metadata('design:paramtypes', [])
    ], AppComponentSteps);
    return AppComponentSteps;
}());
module.exports = AppComponentSteps;
//# sourceMappingURL=app.component.tsflow.steps.js.map