"use strict";
var protractor_1 = require("protractor");
module.exports = function () {
    var DEFAULT_STEP_TIMEOUT = 360 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);
    this.After(function (step, done) {
        protractor_1.browser.takeScreenshot().then(function (base64png) {
            var decodedImage = new Buffer(base64png, 'base64');
            step.attach(decodedImage, 'image/png');
        })
            .then(done);
    });
};
//# sourceMappingURL=hooks.js.map