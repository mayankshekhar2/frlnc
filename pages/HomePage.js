var testDataProvider = require('../data/TestDataProvider.js');
var log = require('../custom/log/logger.js');
var chai = require('../node_modules/chai/chai.js')
var utils = require('../util/CommonUtil.js')
// var JSON = require('../node_modules/json/lib/json.js')

var pageElements = {
        twitterButton : {
            selector : ".//span[@class='counter c_twitter'][contains(@data-url,'/vue-cli-3/')]",
            locateStrategy : 'xpath'
        },

        facebookButton : {
            selector : ".//span[@class='counter c_facebook'][contains(@data-url,'/vue-cli-3/')]",
            locateStrategy : 'xpath'
        },

        article1FacebookButton : {
            selector : ".//article[@class='post'][1]/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },
        
        article2FacebookButton : {
            selector : ".//article[@class='post'][2]/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },
        
        article3FacebookButton : {
            selector : ".//article[@class='post'][3]/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },
        
        article4FacebookButton : {
            selector : ".//article[@class='post'][4]/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },
        
        article5FacebookButton : {
            selector : ".//article[@class='post'][5]/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },
        
        article1TwitterButton : {
            selector : ".//article[@class='post'][1]/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },
        
        article2TwitterButton : {
            selector : ".//article[@class='post'][2]/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },
        
        article3TwitterButton : {
            selector : ".//article[@class='post'][3]/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },
        
        article4TwitterButton : {
            selector : ".//article[@class='post'][4]/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },
        
        article5TwitterButton : {
            selector : ".//article[@class='post'][5]/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },
        
        article1GooglePlusButton : {
            selector : ".//article[@class='post'][1]/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },
        
        article2GooglePlusButton : {
            selector : ".//article[@class='post'][2]/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },
        
        article3GooglePlusButton : {
            selector : ".//article[@class='post'][3]/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },
        
        article4GooglePlusButton : {
            selector : ".//article[@class='post'][4]/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },
        
        article5GooglePlusButton : {
            selector : ".//article[@class='post'][5]/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },        

        googlePlusButton : {
        	selector : ".//span[@class='counter c_plus'][contains(@data-url,'/vue-cli-3/')]",
            locateStrategy : 'xpath'
        },
        
        popUpButton : {
        	selector : ".//button[@class='mfp-close']",
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

        navigateToBlogTwoButton : {
        	selector : ".//a[@href='/blog/page2/']",
            locateStrategy : 'xpath'
        },

        navigateToBlogThreeButton : {
        	selector : ".//a[@href='/blog/page3/']",
            locateStrategy : 'xpath'
        },

        navigateToBlogNineButton : {
        	selector : ".//a[@href='/blog/page9/']",
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

    ValidateCountsForArticle1 : function (browser){
        var sel1 = pageElements.article1FacebookButton.selector;
        this.validateFbCount(browser,sel1);

        var sel2 = pageElements.article1TwitterButton.selector;
        this.validateTwitterCount(browser,sel2);

        var sel3 = pageElements.article1GooglePlusButton.selector;
        this.validatePlusCount(browser,sel3);
    },

    ValidateCountsForArticle2 : function (browser){
        var sel1 = pageElements.article2FacebookButton.selector;
        this.validateFbCount(browser,sel1);

        var sel2 = pageElements.article2TwitterButton.selector;
        this.validateTwitterCount(browser,sel2);

        var sel3 = pageElements.article2GooglePlusButton.selector;
        this.validatePlusCount(browser,sel3);
    },

    ValidateCountsForArticle3 : function (browser){
        var sel1 = pageElements.article3FacebookButton.selector;
        this.validateFbCount(browser,sel1);

        var sel2 = pageElements.article3TwitterButton.selector;
        this.validateTwitterCount(browser,sel2);

        var sel3 = pageElements.article3GooglePlusButton.selector;
        this.validatePlusCount(browser,sel3);
    },

    ValidateCountsForArticle4 : function (browser){
        var sel1 = pageElements.article4FacebookButton.selector;
        this.validateFbCount(browser,sel1);

        var sel2 = pageElements.article4TwitterButton.selector;
        this.validateTwitterCount(browser,sel2);

        var sel3 = pageElements.article4GooglePlusButton.selector;
        this.validatePlusCount(browser,sel3);
    },

    ValidateCountsForArticle5 : function (browser){
        var sel1 = pageElements.article5FacebookButton.selector;
        this.validateFbCount(browser,sel1);

        var sel2 = pageElements.article5TwitterButton.selector;
        this.validateTwitterCount(browser,sel2);

        var sel3 = pageElements.article5GooglePlusButton.selector;
        this.validatePlusCount(browser,sel3);
    },

    validateFbCount : function (browser,sel) {
        
        var pos;
        var UIcount;
        var CookieCount;
        var url;
        var cookieJSON;

        browser.useXpath()
        .pause(2000)

        this.getAttribute(sel,'data-url',function(result){
            url = result.value.toString();
            console.log("data-url of Article= "+url);
        });
        
        this.waitForElementVisible(sel, this.timeout);
        this.getText(sel,function(result){
            console.log("Facebook UI Count="+result.value);
            UIcount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].facebook;
            console.log("Facebook cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIcount,"Fb Count does not match with cookie");
        });
    },

    validateTwitterCount : function (browser,sel) {
        
        var pos;
        var UIcount;
        var CookieCount;
        var url;
        var cookieJSON;

        browser.useXpath()
        .pause(2000)

        this.getAttribute(sel,'data-url',function(result){
            url = result.value.toString();
            console.log("data-url of Article = "+url);
        });
        
        this.waitForElementVisible(sel, this.timeout);
        this.getText(sel,function(result){
            console.log("Twitter UI Count="+result.value);
            UIcount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].twitter;
            console.log("Twitter cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIcount,"Twitter Count does not match with cookie");
        });
    },

    validatePlusCount : function (browser,sel) {
        
        var pos;
        var UIcount;
        var CookieCount;
        var url;
        var cookieJSON;

        browser.useXpath()
        .pause(2000)

        this.getAttribute(sel,'data-url',function(result){
            url = result.value.toString();
            console.log("data-url of Article = "+url);
        });
        
        this.waitForElementVisible(sel, this.timeout);
        this.getText(sel,function(result){
            console.log("Google Plus UI Count="+result.value);
            UIcount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].plus;
            console.log("Google Plus cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIcount,"Google Plus Count does not match with cookie");
        });
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

    validatePage8 : function(browser){
        this.waitForElementVisible('@navigateToBlogNineButton',this.timeout)
    },

    validateErrorPage : function(browser) {
        this.waitForElementVisible('@errorLink',this.timeout);
    }
};

module.exports = {
    commands : [homePage],
    elements : [pageElements]
};