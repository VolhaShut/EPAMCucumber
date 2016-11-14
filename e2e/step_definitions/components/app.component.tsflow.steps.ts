import {protractor, browser} from "protractor";
//let chai = require('chai').use(require('chai-as-promised'));
import {expect} from 'chai';

import { binding, before, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import {AppComponent} from '../../support/components/app.component';
let appComponent: AppComponent;

@binding()
class AppComponentSteps {

    @before()
    private beforeAllScenarios(): void {
        appComponent = new AppComponent();
    }

    @then(/^app.component is loaded tsflow$/)
    private headingIsLoaded(callback: CallbackStepDefinition) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(appComponent.menu), 15000);
        callback();
    };

}

export = AppComponentSteps;