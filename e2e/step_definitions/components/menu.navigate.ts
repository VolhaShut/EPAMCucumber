/**
 * Created by olga on 9.11.16.
 */
import {AppComponent} from '../../support/components/app.component';
import {expect} from 'chai';

export  = function() {
    // let chai = require('chai').use(require('chai-as-promised'));
    // let expect = chai.expect;
    let appComponent: AppComponent;

    this.Before(() => {
        appComponent = new AppComponent();
    });

    this.When(/^I click to '([^"]*)' on menu$/, (menu) => {
        appComponent.clickOnMenuTabs(menu);
    });

    this.Then(/^I expect to see '([^"]*)' page$/,(title)=>{
        return expect(appComponent.getTitle()).to.eventually.equal(title);
    });
}