'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();   
        util.removeHeadlessBrowser(browser);         
        blogPage = browser.page.BlogPage();
        var url = browser.launch_url+"blog/page11/"
        browser.url(url);
        console.log("URL ="+url);          
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);        
    },
    
    'Validate that current page is page 11' : function (browser) {
        blogPage.validatePage11(browser);
    },    
    

    'Validate that Navigation Button to next Page is not present' : function (browser) {
        blogPage.validateNoNavForPage12(browser);
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