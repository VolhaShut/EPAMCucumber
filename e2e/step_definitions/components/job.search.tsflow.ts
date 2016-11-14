import {protractor, browser} from "protractor";
import {expect} from 'chai';
import {AppComponent} from '../../support/components/app.component';
import {SearchComponent} from '../../support/components/search.component';
let appComponent: AppComponent;
let searchComponent: SearchComponent;
import { binding, before, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
class SearchJobSteps {
    @before()
    private beforeAllScenarios(): void {
        appComponent = new AppComponent();
        searchComponent = new SearchComponent();
    }

    @when(/^I click on careers menu tsflow$/)
    private clickingOnMenuCareer(callback: CallbackStepDefinition) {
        appComponent.clickOnMenuTabs("careers");
        callback();
    };

    @then(/^I enter '([^"]*)' tsflow$/)
    private enterSearchText(search,callback: CallbackStepDefinition) {
        searchComponent.getAutocomplete(search);
        callback();
    };

    @then(/^I see '([^"]*)' vacancy tsflow$/)
    private expectingVacancy(search,callback: CallbackStepDefinition) {
        expect(searchComponent.getAutocompleteText()).to.eventually.contain(search).and.notify(callback);


    };
    @then(/^I reopen page tsflow$/)
    private reopenPage(callback: CallbackStepDefinition) {
        appComponent.clickOnMenuTabs("careers");
        callback();
    };

    @when(/^I enter '([^"]*)' vacancy tsflow$/)
    private enterSearchVacancy(text,callback: CallbackStepDefinition) {
        searchComponent.enterVacancyToSearchInput(text);
        callback();
    };

    @then(/^I click to find tsflow$/)
    private clickToFind(callback: CallbackStepDefinition) {
        searchComponent.clickToFind();
        callback();
    };

    @then(/^I check result '([^"]*)' tsflow$/)
    private expectingVacancys(search,callback: CallbackStepDefinition) {

        expect(searchComponent.getResultText()).to.eventually.contain(search).and.notify(callback);
    };


}

export=SearchJobSteps;