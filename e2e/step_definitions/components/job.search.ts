/**
 * Created by olga on 9.11.16.
 */
import {AppComponent} from '../../support/components/app.component';
import {IndexPage} from '../../support/pages/index.page';
import {SearchComponent} from '../../support/components/search.component';
import {expect} from 'chai';

export  = function() {
    let searchComponent: SearchComponent;
    let appComponent: AppComponent;

    this.Before(() => {
        appComponent = new AppComponent();
        searchComponent = new SearchComponent();
      });

    this.When(/^I click on careers menu$/,()=>{
        appComponent.clickOnMenuTabs("careers");
    });
    this.Then(/^I enter '([^"]*)'$/, (search) => {
        return searchComponent.getAutocomplete(search);
    });

    this.Then(/^I see '([^"]*)' vacancy$/, (autocomplete) => {

        return expect(searchComponent.autocomplete.getText()
            .then(function (text) {
                return text.toLowerCase()})).to.eventually.contain(autocomplete);
    });

    this.Then(/^I reopen page$/,()=>{
        return appComponent.clickOnMenuTabs("careers");
    });

    this.When(/^I enter '([^"]*)' vacancy$/, (text)=>{
        return searchComponent.enterVacancyToSearchInput(text);
    });

    this.Then(/^I click to find$/,()=>{
        searchComponent.button_search.click();
        return searchComponent.waitingLoadingPage();
    });

    this.Then(/^I check result '([^"]*)'$/, (search)=>{
        return expect(searchComponent.result.getText()
            .then(function (text) {
            return text.toLowerCase()})).to.eventually.contain(search);
    });
}
