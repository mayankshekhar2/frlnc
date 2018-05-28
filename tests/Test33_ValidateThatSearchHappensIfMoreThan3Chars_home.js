'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var searchPage;
var homePage;
var query;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();    
        util.removeHeadlessBrowser(browser);  
        homePage = browser.page.HomePage();       
        searchPage = browser.page.SearchPage();
        query = "vuex";
        var url = browser.launch_url;
        browser.url(url);
        browser.maximizeWindow();
        console.log("URL ="+url);        
    },

    'Close Pop Up' : function (browser) {
        homePage.closePopUp(browser);
    },

    'Search for a String through search box' : function (browser) {
        homePage.searchThroughSearchBox(browser,query);
    },
    
    'Validate that Search Results section is present on the page' : function (browser) {
        console.log("number of chars in query string :"+query.length);
        searchPage.validateSearchResultsSectionPresent(browser);
    },

    'Validate that Articles are present in the search results section' : function (browser) {
        searchPage.validateArticlesPresentInSearchResults(browser);
    },

    before : function () {
    	log.logInfo('Start of Test to Validate that Search Results are displayed if query string has more than 3 chars.');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Test to Validate that Search Results are displayed if query string has more than 3 chars.');
        }
    }
};   