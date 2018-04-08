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
    }
};

module.exports = {
    commands : [postPage],
    elements : [pageElements]
};