import {browser} from "protractor";
export  = function () {
    const DEFAULT_STEP_TIMEOUT = 360 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);

    this.After((step, done) => {

            browser.takeScreenshot().then((base64png) => {
                let decodedImage = new Buffer(base64png, 'base64');
                step.attach(decodedImage, 'image/png');

            })
            .then(done);
    });
}