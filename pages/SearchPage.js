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
        },

        searchResultBlocks : {
        	selector : ".//div[@class='post-content']",
            locateStrategy : 'xpath'
        },

        fbCounters : {
        	selector : ".//span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },

        twitterCounters : {
        	selector : ".//span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },

        plusCounters : {
        	selector : ".//span[@class='counter c_plus']",
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
    },

    validateArticlesPresentInSearchResults : function(browser){
        this.assert.elementPresent("@searchResultsArticles");
    },

    ValidateFacebookCounterIsPresentOnEachResult : function(browser){
        var numOfResults;
        var numOfFbCounters;
        this.waitForElementVisible('@searchResultBlocks',this.timeout);
        browser.elements('xpath',"//div[@class='post-content']",function(result){
            numOfResults = Object.keys(result.value).length;
            console.log("Number Of Search Results ="+numOfResults);
        });

        browser.elements('xpath',"//span[@class='counter c_facebook']",function(result){
            numOfFbCounters = Object.keys(result.value).length;
            console.log("Number Of Facebook Counters ="+numOfFbCounters);
            chai.assert.equal(numOfFbCounters,numOfResults,"Facebook counter is not present for each search result.");   
        });
    },

    ValidateTwitterCounterIsPresentOnEachResult : function(browser){
        var numOfResults;
        var numOftwitterCounters;
        this.waitForElementVisible('@searchResultBlocks',this.timeout);
        browser.elements('xpath',"//div[@class='post-content']",function(result){
            numOfResults = Object.keys(result.value).length;
            console.log("Number Of Search Results ="+numOfResults);
        });

        browser.elements('xpath',"//span[@class='counter c_twitter']",function(result){
            numOftwitterCounters = Object.keys(result.value).length;
            console.log("Number Of Twitter Counters ="+numOftwitterCounters);
            chai.assert.equal(numOftwitterCounters,numOfResults,"Twitter counter is not present for each search result.");   
        });
    },

    ValidatePlusCounterIsPresentOnEachResult : function(browser){
        var numOfResults;
        var numOfPlusCounters;
        this.waitForElementVisible('@searchResultBlocks',this.timeout);
        browser.elements('xpath',"//div[@class='post-content']",function(result){
            numOfResults = Object.keys(result.value).length;
            console.log("Number Of Search Results ="+numOfResults);
        });

        browser.elements('xpath',"//span[@class='counter c_plus']",function(result){
            numOfPlusCounters = Object.keys(result.value).length;
            console.log("Number Of Google Plus Counters ="+numOfPlusCounters);
            chai.assert.equal(numOfPlusCounters,numOfResults,"Google Plus counter is not present for each search result.");   
        });
    }
};

module.exports = {
    commands : [searchPage],
    elements : [pageElements]
};