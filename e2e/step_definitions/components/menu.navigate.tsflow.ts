import {protractor, browser} from "protractor";
import {expect} from 'chai';
import {AppComponent} from '../../support/components/app.component';
let appComponent: AppComponent;
import { binding, before, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
class MenuSteps {
    @before()
    private beforeAllScenarios(): void {
        appComponent = new AppComponent();
    }

    @when(/^I click to '([^"]*)' on menu tsflow$/)
    private clickingOnMenuTabs(menu,callback: CallbackStepDefinition) {
        appComponent.clickOnMenuTabs(menu);
        callback();
    };

    @then(/^I expect to see '([^"]*)' page tsflow$/)
    private expectingTitle(title,callback: CallbackStepDefinition) {
        expect(appComponent.getTitle()).to.eventually.equal(title).and.notify(callback);

    };
}

export=MenuSteps;