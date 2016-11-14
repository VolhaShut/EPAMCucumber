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
var search_component_1 = require('../../support/components/search.component');
var appComponent;
var searchComponent;
var cucumber_tsflow_1 = require('cucumber-tsflow');
var SearchJobSteps = (function () {
    function SearchJobSteps() {
    }
    SearchJobSteps.prototype.beforeAllScenarios = function () {
        appComponent = new app_component_1.AppComponent();
        searchComponent = new search_component_1.SearchComponent();
    };
    SearchJobSteps.prototype.clickingOnMenuCareer = function (callback) {
        appComponent.clickOnMenuTabs("careers");
        callback();
    };
    ;
    SearchJobSteps.prototype.enterSearchText = function (search, callback) {
        searchComponent.getAutocomplete(search);
        callback();
    };
    ;
    SearchJobSteps.prototype.expectingVacancy = function (search, callback) {
        chai_1.expect(searchComponent.getAutocompleteText()).to.eventually.contain(search).and.notify(callback);
    };
    ;
    SearchJobSteps.prototype.reopenPage = function (callback) {
        appComponent.clickOnMenuTabs("careers");
        callback();
    };
    ;
    SearchJobSteps.prototype.enterSearchVacancy = function (text, callback) {
        searchComponent.enterVacancyToSearchInput(text);
        callback();
    };
    ;
    SearchJobSteps.prototype.clickToFind = function (callback) {
        searchComponent.clickToFind();
        callback();
    };
    ;
    SearchJobSteps.prototype.expectingVacancys = function (search, callback) {
        chai_1.expect(searchComponent.getResultText()).to.eventually.contain(search).and.notify(callback);
    };
    ;
    __decorate([
        cucumber_tsflow_1.before(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "beforeAllScenarios", null);
    __decorate([
        cucumber_tsflow_1.when(/^I click on careers menu tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "clickingOnMenuCareer", null);
    __decorate([
        cucumber_tsflow_1.then(/^I enter '([^"]*)' tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "enterSearchText", null);
    __decorate([
        cucumber_tsflow_1.then(/^I see '([^"]*)' vacancy tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "expectingVacancy", null);
    __decorate([
        cucumber_tsflow_1.then(/^I reopen page tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "reopenPage", null);
    __decorate([
        cucumber_tsflow_1.when(/^I enter '([^"]*)' vacancy tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "enterSearchVacancy", null);
    __decorate([
        cucumber_tsflow_1.then(/^I click to find tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "clickToFind", null);
    __decorate([
        cucumber_tsflow_1.then(/^I check result '([^"]*)' tsflow$/), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Function]), 
        __metadata('design:returntype', void 0)
    ], SearchJobSteps.prototype, "expectingVacancys", null);
    SearchJobSteps = __decorate([
        cucumber_tsflow_1.binding(), 
        __metadata('design:paramtypes', [])
    ], SearchJobSteps);
    return SearchJobSteps;
}());
module.exports = SearchJobSteps;
//# sourceMappingURL=job.search.tsflow.js.map