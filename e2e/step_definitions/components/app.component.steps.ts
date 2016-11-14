import {AppComponent} from '../../support/components/app.component';
import {SearchComponent} from '../../support/components/search.component';
import {browser, protractor} from 'protractor';
import {expect} from 'chai';

export  = function() {
    // let chai = require('chai').use(require('chai-as-promised'));
    // let expect = chai.expect;
    let appComponent: AppComponent;

    this.Before(() => {

        appComponent = new AppComponent();
    });

    this.When(/^app.component is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(appComponent.menu), 15000);
    });


}