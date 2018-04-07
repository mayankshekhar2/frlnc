'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;

module.exports = {

    'Launch the URL to page 29' : function (browser) {
        browser.useXpath();            
        blogPage = browser.page.BlogPage();
        var url = browser.launch_url+"blog/page29/"
        browser.url(url);
        console.log("URL ="+url);        
    },

    
    'Validate that that error Page is displayed' : function (browser) {
        blogPage.validateErrorPage(browser);
    },

    before : function () {
    	log.logInfo('Start of Page X Navigation Negative Scenario 1 Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Page X Navigation Negative Scenario 1 Test');
        }
    }
};