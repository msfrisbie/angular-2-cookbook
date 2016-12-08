"use strict";
var app_po_1 = require("./app.po");
describe('App E2E Test Suite', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should have the correct h1 text', function () {
        page.navigate();
        expect(page.getHeaderText())
            .toEqual('AppComponent template!');
    });
});
