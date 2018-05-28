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
        query = "vuejs";
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
    
    'Validate that Facebook Counter is present for each searh result' : function (browser) {
        searchPage.ValidateFacebookCounterIsPresentOnEachResult(browser);
    },

    'Validate that Twitter Counter is present for each searh result' : function (browser) {
        searchPage.ValidateTwitterCounterIsPresentOnEachResult(browser);
    },

    'Validate that Google Plus Counter is present for each searh result' : function (browser) {
        searchPage.ValidatePlusCounterIsPresentOnEachResult(browser);
    },

    before : function () {
    	log.logInfo('Start of Test to Validate that Share counters are present for each search results.');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Test to Validate that Share counters are present for each search results.');
        }
    }
};   