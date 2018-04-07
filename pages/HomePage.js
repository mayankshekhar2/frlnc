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

        navigateToBlogTwoButton : {
        	selector : ".//a[@href='/blog/page2/']",
            locateStrategy : 'xpath'
        },

        navigateToBlogThreeButton : {
        	selector : ".//a[@href='/blog/page3/']",
            locateStrategy : 'xpath'
        },

        aricleArray : {
        	selector : ".//article[@class='post']",
            locateStrategy : 'xpath'
        },

        firstArticleDate : {
        	selector : ".//article[@class='post'][1]/descendant::time",
            locateStrategy : 'xpath'
        },

        secondArticleDate : {
        	selector : ".//article[@class='post'][2]/descendant::time",
            locateStrategy : 'xpath'
        },

        thirdArticleDate : {
        	selector : ".//article[@class='post'][3]/descendant::time",
            locateStrategy : 'xpath'
        },

        fourthArticleDate : {
        	selector : ".//article[@class='post'][4]/descendant::time",
            locateStrategy : 'xpath'
        },

        fifthArticleDate : {
        	selector : ".//article[@class='post'][5]/descendant::time",
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
var homePage = {

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

    validateFiveArticles : function (browser) {
        
        browser.useXpath()
        .pause(2000)

        this.waitForElementVisible('@aricleArray',this.timeout);
        browser.elements('xpath',"//article[@class='post']",function(result){
            console.log(result.value);
            var length = Object.keys(result.value).length;
            console.log("Number Of Articles ="+length);
            chai.assert.equal(length,5,"Number Of Articles is not 5.");   
        });
    },

    validateFirstArticleIsLaterThanSecondArticle : function (browser) {
        var art1Time;
        var art2Time;
        var art3Time;
        var art4Time;
        var art5Time;

        this.waitForElementVisible('@firstArticleDate',this.timeout)
        this.getText('@firstArticleDate',function(result){
            art1Time = new Date(result.value);
            console.log("Article 1 Date = "+result.value);
        });

        this.waitForElementVisible('@secondArticleDate',this.timeout)
        this.getText('@secondArticleDate',function(result){
            art2Time = new Date(result.value);
            console.log("Article 2 Date = "+result.value);
            chai.assert.isAbove(art1Time,art2Time,"First Post is older than Second Post.")
        });

        this.waitForElementVisible('@thirdArticleDate',this.timeout)
        this.getText('@thirdArticleDate',function(result){
            art3Time = new Date(result.value);
            console.log("Article 3 Date = "+result.value);
            chai.assert.isAbove(art2Time,art3Time,"Second Post is older than third Post.")
        });

        this.waitForElementVisible('@fourthArticleDate',this.timeout)
        this.getText('@fourthArticleDate',function(result){
            art4Time = new Date(result.value);
            console.log("Article 4 Date = "+result.value);
            chai.assert.isAbove(art3Time,art4Time,"Third Post is older than fourth Post.")
        });

        this.waitForElementVisible('@fifthArticleDate',this.timeout)
        this.getText('@fifthArticleDate',function(result){
            art5Time = new Date(result.value);
            console.log("Article 5 Date = "+result.value);
            chai.assert.isAbove(art4Time,art5Time,"Fourth Post is older than fifth Post.")
        });        
    },

    validateNavigationToPage2 : function (browser) {
        this.waitForElementVisible('@navigateToBlogTwoButton',this.timeout)
        .click('@navigateToBlogTwoButton');
    },

    validatePage2 : function(browser){
        this.waitForElementVisible('@navigateToBlogThreeButton',this.timeout)
    },

    validateErrorPage : function(browser) {
        this.waitForElementVisible('@errorLink',this.timeout);
    }
};

module.exports = {
    commands : [homePage],
    elements : [pageElements]
};