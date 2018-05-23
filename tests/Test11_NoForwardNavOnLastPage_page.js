'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;
var homePage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();    
        blogPage = browser.page.BlogPage();
        homePage = browser.page.HomePage();
        browser.url(browser.launch_url);
        homePage.goToLastBlogPage(browser)          
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);        
    },   

    'Validate that Navigation Button to next Page is not present' : function (browser) {
        blogPage.validateNoNavToNextPage(browser);
    },

    before : function () {
    	log.logInfo('Start of No forward Navigation on last page Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of No forward Navigation on last page Test');
        }
    }
};