/**
 * Created by olga on 9.11.16.
 */
import { element, by , browser, ExpectedConditions} from 'protractor';

export class SearchComponent {
    button_careers=element(by.css('ul.tile-menu > li:nth-child(5) > a'));
    input_search=element(by.css('.job-search-input'));
    autocomplete=element(by.className('autocomplete-suggestion'));
    button_search=element(by.css('.job-search-button.location-search-submit'));
    //   result=element(by.css('ul.search-result-list>li:nth-child(1)> div > a'));
    search_for=element(by.className('searched-for'));
    result=element(by.className('position-name hot'));
    submitBtn = element(by.className('section-ui section-color-white   section-padding-small'));


    scrollIntoSubmitBtnView () {
        return browser.executeScript('arguments[0].scrollIntoView(true);',this.submitBtn.getWebElement());
    };

    enterVacancyToSearchInput(vacancy:string){
        browser.wait(ExpectedConditions.visibilityOf(this.submitBtn), 30000);
        this.scrollIntoSubmitBtnView ();
        this.input_search.click();
        return this.input_search.sendKeys(vacancy);
    };


    waitingLoadingPage(){
        return browser.wait(ExpectedConditions.visibilityOf(this.result), 30000);
    }

    getAutocomplete(vacancy:string){
        this.scrollIntoSubmitBtnView ();
        this.input_search.click();
        this.input_search.sendKeys(vacancy);
        return browser.wait(ExpectedConditions.visibilityOf(this.autocomplete), 30000);

    }

    getAutocompleteText(){
       return this.autocomplete.getText();

    }

    getResultText(){
        return this.result.getText();

    }

    clickToFind(){
        this.button_search.click();
        return browser.wait(ExpectedConditions.visibilityOf(this.result), 30000);
    }
}
