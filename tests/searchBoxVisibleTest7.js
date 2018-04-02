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
        var url = browser.launch_url+"blog/page5/"
        browser.url(url);
        console.log("URL ="+url);        
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },
    
    'Validate that search box is visible' : function (browser) {
        homePage.validatesearchBoxVisible(browser);
    },

    before : function () {
    	log.logInfo('Start of Search Box Visible Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Search Box Visible Test');
        }
    }
};