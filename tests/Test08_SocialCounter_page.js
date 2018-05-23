'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();
        var url = browser.launch_url+"blog/page5/"    
        blogPage = browser.page.BlogPage();
        browser.url(url);        
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);
    },
    
    'Validate Counts for Article 1' : function (browser) {
        blogPage.ValidateCountsForArticle1(browser);
    },

    'Validate Counts for Article 2' : function (browser) {
        blogPage.ValidateCountsForArticle2(browser);
    },

    'Validate Counts for Article 3' : function (browser) {
        blogPage.ValidateCountsForArticle3(browser);
    },

    'Validate Counts for Article 4' : function (browser) {
        blogPage.ValidateCountsForArticle4(browser);
    },

    'Validate Counts for Article 5' : function (browser) {
        blogPage.ValidateCountsForArticle5(browser);
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