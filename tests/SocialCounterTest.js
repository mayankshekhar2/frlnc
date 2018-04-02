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
    
    'Validate Counts for Article 1' : function (browser) {
        homePage.ValidateCountsForArticle1(browser);
    },

    'Validate Counts for Article 2' : function (browser) {
        homePage.ValidateCountsForArticle2(browser);
    },

    'Validate Counts for Article 3' : function (browser) {
        homePage.ValidateCountsForArticle3(browser);
    },

    'Validate Counts for Article 4' : function (browser) {
        homePage.ValidateCountsForArticle4(browser);
    },

    'Validate Counts for Article 5' : function (browser) {
        homePage.ValidateCountsForArticle5(browser);
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