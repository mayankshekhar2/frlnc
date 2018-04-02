'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var homePage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();            
        homePage = browser.page.HomePage();
        var url = browser.launch_url+"blog/page3/"
        browser.url(url);
        console.log("URL ="+url);      
    },

    'Verify Pop is visible' : function (browser) {
        homePage.verifyPopUpVisible(browser);
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },

    before : function () {
    	log.logInfo('Start of Pop Up Visibility Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Pop Up Visibility Test');
        }
    }
};