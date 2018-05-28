'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;
var homePage;
var lastPageNumber;

module.exports = {

    'Launch the HomePage URL' : function (browser) {
        browser.useXpath(); 
        util.removeHeadlessBrowser(browser);   
        blogPage = browser.page.BlogPage();
        homePage = browser.page.HomePage();
        browser.url(browser.launch_url);
        browser.maximizeWindow();     
    },

    'Get the total Number Of Pages' : function(browser) {
        homePage.getLastPageNumber(browser);
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);        
    },
    
    'Validate 5 articles on Home Page' : function(brower) {
        homePage.validateFiveArticles(brower);
    },

    'Go to each page and Validate that 5 Articles are present' : function (browser) {
        homePage.checkFiveArticlesOnEachPage(browser,blogPage);        
    },

    before : function () {
    	log.logInfo('Start of Test to validate 5 Articles on each blog page.');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Test to validate 5 Articles on each blog page.');
        }
    }
};