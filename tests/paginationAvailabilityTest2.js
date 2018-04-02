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
        browser.url(browser.launch_url);
        console.log("URL ="+launch_url);        
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },

    'Validate that Navigation Button is present and click it' : function (browser) {
        homePage.validateNavigationToPage2(browser);
    },
    
    'Validate that new page is page 2' : function (browser) {
        homePage.validatePage2(browser);
    },

    before : function () {
    	log.logInfo('Start of Pagination Availability Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Pagination Availability Test');
        }
    }
};