'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var homePage;
var fbcount;
var twtrCount;
var plusCount;
var cookieVal;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();            
        homePage = browser.page.HomePage();
        browser.url(browser.launch_url);        
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },

    'Print the Social Counter Cookie' : function (browser) {
        homePage.printSocialCounter(browser);
    },
    
    'Assert Fb Count' : function (browser) {
        homePage.validateFbCount(browser);
    },

    'Assert Twitter Count' : function (browser) {
        homePage.validateTwtrCount(browser);
    },

    'Assert Google Plus Count' : function (browser) {
        homePage.validatePlusCount(browser);
    },

    before : function () {
    	log.logInfo('Start of Social Counter Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Social Counter Test');
        }
    }
};