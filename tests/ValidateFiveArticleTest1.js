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
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },

    'Validate that 5 Articles are displayed' : function (browser) {
        homePage.validateFiveArticles(browser);
    },
    
    'Validate that Posts are in descending order by date' : function (browser) {
        homePage.validateFirstArticleIsLaterThanSecondArticle(browser);
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