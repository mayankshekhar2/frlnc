'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var searchPage;
var query;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();    
        util.removeHeadlessBrowser(browser);         
        searchPage = browser.page.SearchPage();
        query = "";
        var url = browser.launch_url+"search/?q=";
        browser.url(url);
        browser.maximizeWindow();
        console.log("URL ="+url);        
    },

    'Close Pop Up' : function (browser) {
        searchPage.closePopUp(browser);
    },
    
    'Validate that Search Results section is present on the page' : function (browser) {
        searchPage.validateSearchResultsSectionPresent(browser);
    },

    'Validate that No results are diplayed on the page' : function (browser) {
        searchPage.validateNoArticlesInSearchResults(browser);
    },

    before : function () {
    	log.logInfo('Start of Test to Validate that No results are shown for invalid query string.');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Test to Validate that No results are shown for invalid query string.');
        }
    }
};