'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();
        var url = browser.launch_url+"blog/page7/"    
        blogPage = browser.page.BlogPage();
        browser.url(url); 
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);
    },
    
    'Validate Comments for Article 1' : function (browser) {
        blogPage.ValidateCommentsForArticle1(browser);
    },

    'Validate Comments for Article 2' : function (browser) {
        blogPage.ValidateCommentsForArticle2(browser);
    },

    'Validate Comments for Article 3' : function (browser) {
        blogPage.ValidateCommentsForArticle3(browser);
    },

    'Validate Comments for Article 4' : function (browser) {
        blogPage.ValidateCommentsForArticle4(browser);
    },

    'Validate Comments for Article 5' : function (browser) {
        blogPage.ValidateCommentsForArticle5(browser);
    },

    before : function () {
    	log.logInfo('Start of Comments Presence Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Comments Presence Test');
        }
    }
};