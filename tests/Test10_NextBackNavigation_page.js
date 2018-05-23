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
        var url = browser.launch_url+"blog/page3/"
        browser.url(url);
        console.log("URL ="+url);          
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);
        
    },

    'Validate that Navigation Button to next Page is present and click it' : function (browser) {
        blogPage.validateNavigationToPage4(browser);
    },
    
    'Validate that new page is page 4' : function (browser) {
        blogPage.validatePage4(browser);
    },

    'Validate that Navigation Button to previous Page is present and click it' : function (browser) {
        blogPage.validateNavigationToPage3(browser);
    },
    
    'Validate that new page is page 3' : function (browser) {
        blogPage.validatePage3(browser);
    },

    before : function () {
    	log.logInfo('Start of Next and Back Navigation Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Next and Back Navigation Test');
        }
    }
};