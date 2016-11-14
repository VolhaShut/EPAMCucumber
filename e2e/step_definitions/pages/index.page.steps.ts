import {IndexPage} from '../../support/pages/index.page';
import {browser} from 'protractor';
import {expect} from 'chai';


export  = function() {

    //let chai = require('chai').use(require('chai-as-promised'));
    //let expect = chai.expect;

    this.Given(/^I open home page$/, () => {
        return IndexPage.openPage();
    });
    this.When(/^I wait to load page$/, ()=>{
        return IndexPage.waitPage();
    });

    this.When(/^page is loaded$/, () => {
        return expect(browser.getTitle()).to.eventually.equal(IndexPage.title);
    });

}