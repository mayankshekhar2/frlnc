'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var homePage;

module.exports = {

    'Launch the URL to page 0' : function (browser) {
        browser.useXpath();            
        homePage = browser.page.HomePage();
        var url = browser.launch_url+"blog/page0/"
        browser.url(url);
        console.log("URL ="+url);        
    },

    
    'Validate that that error Page is displayed' : function (browser) {
        homePage.validateErrorPage(browser);
    },

    before : function () {
    	log.logInfo('Start of Page X Navigation Negative Scenario 2 Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Page X Navigation Negative Scenario 2 Test');
        }
    }
};