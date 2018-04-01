'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var homePage;

module.exports = {

    'Launch the URL to page 8' : function (browser) {
        browser.useXpath();            
        homePage = browser.page.HomePage();
        var url = browser.launch_url+"blog/page8/"
        browser.url(url);
        console.log("URL ="+url);        
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },
    
    'Validate that the page is page 8' : function (browser) {
        homePage.validatePage8(browser);
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