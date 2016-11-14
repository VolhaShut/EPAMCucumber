import * as protractor from 'protractor';
import Options = webdriver.Options;
import WebDriver = webdriver.WebDriver;


export let config = {

    directConnect: true,

    // Base URL for application server
    baseUrl: 'http://www.epam.com/',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'e2e/features/*.feature'
    ],

    onPrepare: () => {
        let globals = require('protractor');
        let browser: protractor.ProtractorBrowser = globals.browser;
        browser.ignoreSynchronization = true;
        ((browser.driver as WebDriver).manage() as Options).window().maximize();

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        monochrome: true,
        strict: true,
        format: ['pretty', 'json:e2e/output/cucumber.json'],
        require: ['e2e/step_definitions/**/*.ts', 'e2e/support/**/*.ts'],
        tags: ['@Important']
    }
};