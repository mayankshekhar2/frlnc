var testDataProvider = require('../data/TestDataProvider.js');
var log = require('../custom/log/logger.js');
var chai = require('../node_modules/chai/chai.js')

var pageElements = {
        twitterButton : {
            selector : ".//span[@class='counter c_twitter'][contains(@data-url,'/vue-cli-3/')]",
            locateStrategy : 'xpath'
        },

        facebookButton : {
            selector : ".//span[@class='counter c_facebook'][contains(@data-url,'/vue-cli-3/')]",
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
        }
};
var homePage = {

    closePopUp : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@popUpButton', this.timeout)
        .click('@popUpButton');
    },

    printSocialCounter : function(browser){
        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            console.log("socialCounter cookie= "+result.value);
        });
    },

    validateFbCount : function (browser) {
        
        var fb;

        browser.useXpath()
        .pause(2000)
        
        this.waitForElementVisible('@facebookButton', this.timeout);
        this.getText('@facebookButton',function(result){
            console.log("Facebook Count="+result.value);
            fb = "%22facebook%22:"+result.value;
        });

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            var found = result.value.indexOf(fb);
            var final = "Fail";
            if(found >= 0)
                final = "Pass";
            chai.assert.equal(final,"Pass","Fb Count does not match with cookie");
        });
    },

    validateTwtrCount : function (browser) {
        
        var twt;

        browser.useXpath()
        .pause(2000)
        
        this.waitForElementVisible('@twitterButton', this.timeout);
        this.getText('@twitterButton',function(result){
            console.log("Twitter Count="+result.value);
            twt = "%22twitter%22:"+result.value;
        });

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            var found = result.value.indexOf(twt);
            var final = "Fail";
            if(found >= 0)
                final = "Pass";
            chai.assert.equal(final,"Pass","Twitter Count does not match with cookie");
        });
    },

    validatePlusCount : function (browser) {
        
        var plus;

        browser.useXpath()
        .pause(2000)
        
        this.waitForElementVisible('@googlePlusButton', this.timeout);
        this.getText('@googlePlusButton',function(result){
            console.log("Plus Count="+result.value);
            plus = "%22plus%22:"+result.value;
        });

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            var found = result.value.indexOf(plus);
            var final = "Fail";
            if(found >= 0)
                final = "Pass";
            chai.assert.equal(final,"Pass","Google Plus Count does not match with cookie");
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
    }
};

module.exports = {
    commands : [homePage],
    elements : [pageElements]
};