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

        errorLink : {
        	selector : ".//a[@class='error-link']",
            locateStrategy : 'xpath'
        },

        searchBox : {
        	selector : ".//input[@id='search-query']",
            locateStrategy : 'xpath'
        },

        commentFrame : {
        	selector : ".//iframe[@title='Disqus'][1]",
            locateStrategy : 'xpath'
        },

        commentSection : {
        	selector : ".//div[@id='disqus']",
            locateStrategy : 'xpath'
        },

        commentCounter : {
        	selector : ".//span[@class='comment-count']",
            locateStrategy : 'xpath'
        },

        authorBox : {
        	selector : ".//div[@class='author-box']",
            locateStrategy : 'xpath'
        },

        authorTitle : {
        	selector : ".//h2[@class='author-title']",
            locateStrategy : 'xpath'
        },

        authorBio : {
        	selector : ".//p[@class='author-bio']",
            locateStrategy : 'xpath'
        },

        headerFacebookCounter : {
            selector : ".//header/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },

        footerFacebookCounter : {
            selector : ".//footer/descendant::span[@class='counter c_facebook']",
            locateStrategy : 'xpath'
        },

        headerTwitterCounter : {
            selector : ".//header/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },

        footerTwitterCounter : {
            selector : ".//footer/descendant::span[@class='counter c_twitter']",
            locateStrategy : 'xpath'
        },

        headerPlusCounter : {
            selector : ".//header/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },

        footerPlusCounter : {
            selector : ".//footer/descendant::span[@class='counter c_plus']",
            locateStrategy : 'xpath'
        },

        relatedPost1 : {
            selector : "//div[@class='related'][1]/descendant::div/div/a",
            locateStrategy : 'xpath'
        },

        relatedPost2 : {
            selector : "//div[@class='related'][2]/descendant::div/div/a",
            locateStrategy : 'xpath'
        },

        relatedPost3 : {
            selector : "//div[@class='related'][3]/descendant::div/div/a",
            locateStrategy : 'xpath'
        }
};
var postPage = {

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

    validateErrorPage : function(browser) {
        this.waitForElementVisible('@errorLink',this.timeout);
    },

    ValidateFbCountsForPost : function (browser){
        var sel1 = pageElements.headerFacebookCounter.selector;
        var sel2 = pageElements.footerFacebookCounter.selector;
        this.validateFbCount(browser,sel1,sel2);
    },

    ValidateTwitterCountsForPost : function (browser){
        var sel1 = pageElements.headerTwitterCounter.selector;
        var sel2 = pageElements.footerTwitterCounter.selector;
        this.validateTwitterCount(browser,sel1,sel2);
    },

    ValidatePlusCountsForPost : function (browser){
        var sel1 = pageElements.headerPlusCounter.selector;
        var sel2 = pageElements.footerPlusCounter.selector;
        this.validatePlusCount(browser,sel1,sel2);
    },

    validateFbCount : function (browser,sel,sel2) {
        
        var pos;
        var UIHeadercount;
        var UIFootercount;
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
            console.log("Facebook UI Header Count="+result.value);
            UIHeadercount = result.value;
        });  

        this.getText(sel2,function(result){
            console.log("Facebook UI Footer Count="+result.value);
            UIFootercount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].facebook;
            console.log("Facebook cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIHeadercount,"Fb Count does not match with cookie");
            chai.assert.equal(UIHeadercount,UIFootercount,"Fb counts do not match between header and footer.")
        });
    },

    validateTwitterCount : function (browser,sel,sel2) {
        
        var pos;
        var UIHeadercount;
        var UIFootercount;
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
            console.log("Twitter UI Header Count="+result.value);
            UIHeadercount = result.value;
        });  

        this.getText(sel2,function(result){
            console.log("Twitter UI Footer Count="+result.value);
            UIFootercount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].twitter;
            console.log("Twitter cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIHeadercount,"Twitter Count does not match with cookie");
            chai.assert.equal(UIHeadercount,UIFootercount,"Twitter counts do not match between header and footer.")
        });
    },

    validatePlusCount : function (browser,sel,sel2) {
        
        var pos;
        var UIHeadercount;
        var UIFootercount;
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
            console.log("Google Plus UI Header Count="+result.value);
            UIHeadercount = result.value;
        });  

        this.getText(sel2,function(result){
            console.log("Google Plus UI Footer Count="+result.value);
            UIFootercount = result.value;
        });        

        browser.pause(2000)
        .getCookie('socialCounter',function(result){
            cookieJSON = utils.getJSONObj(result.value.toString());
            pos = utils.getBlogPositioninJSON(url,cookieJSON);
            CookieCount = cookieJSON[pos].plus;
            console.log("Google Plus cookie Count="+CookieCount);
            chai.assert.equal(CookieCount,UIHeadercount,"Plus Count does not match with cookie");
            chai.assert.equal(UIHeadercount,UIFootercount,"Plus counts do not match between header and footer.")
        });
    },

    validateCommentCounterPresent : function (browser) {
        browser.useXpath()
        .pause(2000);
        this.waitForElementVisible('@commentSection',this.timeout)
        .click('@commentSection')
        var frameid;
        
        this.getAttribute('@commentFrame','id',function(result){
            frameid = result.value;
            console.log("Swith to Comments Frame")
            this.frame(null)            
            .frame(frameid)
        })
        .waitForElementVisible('@commentCounter',this.timeout)
        this.getText('@commentCounter', function(result){
            console.log("Comments Counts = "+result.value.toString())
        })
        // this.frame(null)       
    },

    validateCommentSectionPresent : function(browser){
        browser.useXpath()
        .pause(2000);
        this.waitForElementVisible('@commentSection',this.timeout)
    },

    validateAuthorInfoAvailable : function(browser){
        browser.useXpath()
        .pause(2000);
        this.waitForElementVisible('@authorBox',this.timeout)
        .waitForElementVisible('@authorTitle',this.timeout)
        .waitForElementVisible('@authorBio',this.timeout)
    },

    validateRelatedPostsPresent : function(browser){
        browser.useXpath()
        .pause(2000);
        this.waitForElementVisible('@relatedPost1',this.timeout)
        .getText('@relatedPost1',function(result){
            console.log("Related Article 1 ="+result.value)
        })
        .waitForElementVisible('@relatedPost2',this.timeout)
        .getText('@relatedPost2',function(result){
            console.log("Related Article 2 ="+result.value)
        })
        .waitForElementVisible('@relatedPost3',this.timeout)
        .getText('@relatedPost3',function(result){
            console.log("Related Article 3 ="+result.value)
        })
    }
};

module.exports = {
    commands : [postPage],
    elements : [pageElements]
};