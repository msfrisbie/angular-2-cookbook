"use strict";
var protractor_1 = require("protractor");
var AppPage = (function () {
    function AppPage() {
    }
    AppPage.prototype.navigate = function () {
        protractor_1.browser.get('/');
    };
    AppPage.prototype.getHeaderText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
