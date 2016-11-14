import {protractor, browser} from "protractor";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import {IndexPage} from '../../support/pages/index.page';

@binding()
class IndexPageSteps {

    @given(/^I open home page tsflow$/)
    private loadIndexPage(callback: CallbackStepDefinition) {
        IndexPage.openPage();
        callback();
    };

    @when(/^I wait to load page tsflow$/)
    private waitPage(callback: CallbackStepDefinition){
        IndexPage.waitPage();
        callback();
    };

    @when(/^page is loaded tsflow$/)
    private indexPageIsLoaded(callback: CallbackStepDefinition) {
        expect(browser.getTitle()).to.become(IndexPage.title).and.notify(callback);
    };
}

export = IndexPageSteps;