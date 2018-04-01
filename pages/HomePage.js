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
    }
};

module.exports = {
    commands : [homePage],
    elements : [pageElements]
};