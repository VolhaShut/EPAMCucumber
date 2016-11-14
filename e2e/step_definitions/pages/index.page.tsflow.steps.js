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
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var cucumber_tsflow_1 = require('cucumber-tsflow');
var index_page_1 = require('../../support/pages/index.page');
var IndexPageSteps = (function () {
    function IndexPageSteps() {
    }
    IndexPageSteps.prototype.loadIndexPage = function (callback) {
        index_page_1.IndexPage.openPage();
        callback();
    };
    ;
    IndexPageSteps.prototype.waitPage = function (callback) {
        index_page_1.IndexPage.waitPage();
        callback();
    };
    ;
    IndexPageSteps.prototype.indexPageIsLoaded = function (callback) {
        expect(protractor_1.browser.getTitle()).to.become(index_page_1.IndexPage.title).and.notify(callback);
    };
    ;
    __decorate([
        cucumber_tsflow_1.given(/^I open home page tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], IndexPageSteps.prototype, "loadIndexPage", null);
    __decorate([
        cucumber_tsflow_1.when(/^I wait to load page tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], IndexPageSteps.prototype, "waitPage", null);
    __decorate([
        cucumber_tsflow_1.when(/^page is loaded tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], IndexPageSteps.prototype, "indexPageIsLoaded", null);
    IndexPageSteps = __decorate([
        cucumber_tsflow_1.binding(), 
        __metadata('design:paramtypes', [])
    ], IndexPageSteps);
    return IndexPageSteps;
}());
module.exports = IndexPageSteps;
//# sourceMappingURL=index.page.tsflow.steps.js.map