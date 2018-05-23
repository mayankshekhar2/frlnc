var testDataProvider = require('../data/TestDataProvider.js');
var log = require('../custom/log/logger.js');
var chai = require('../node_modules/chai/chai.js')
var utils = require('../util/CommonUtil.js')
// var JSON = require('../node_modules/json/lib/json.js')

var pageElements = {
        
        popUpButton : {
        	selector : ".//button[@class='mfp-close']",
            locateStrategy : 'xpath'
        },

        searchResultsSection : {
        	selector : ".//main[@class='site-main']/section[@id='search-results']",
            locateStrategy : 'xpath'
        },

        searchResultsArticles : {
        	selector : ".//main[@class='site-main']/section[@id='search-results']/article",
            locateStrategy : 'xpath'
        },

        errorLink : {
        	selector : ".//a[@class='error-link']",
            locateStrategy : 'xpath'
        },

        searchBox : {
        	selector : ".//input[@id='search-query']",
            locateStrategy : 'xpath'
        }
};
var searchPage = {

    validatesearchBoxVisible : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@searchBox',this.timeout);
    },

    verifyPopUpVisible : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@popUpButton', this.timeout)
    },

    closePopUp : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@popUpButton', this.timeout)
        .click('@popUpButton');
    },    

    validateSearchResultsSectionPresent : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@searchResultsSection', this.timeout)
    },

    validateErrorPage : function(browser) {
        this.waitForElementVisible('@errorLink',this.timeout);
    },

    validateQueryStringinSearchInput : function(browser,query){
        this.getValue('@searchBox',function(result){
            console.log("query string from url = "+query)
            console.log("query string from search input = "+result.value)
            chai.assert.equal(result.value,query,'query string in search input box does not match with URL.')
        })
    },

    validateNoArticlesInSearchResults : function(browser){
        this.assert.elementNotPresent('@searchResultsArticles')
    }
};

module.exports = {
    commands : [searchPage],
    elements : [pageElements]
};