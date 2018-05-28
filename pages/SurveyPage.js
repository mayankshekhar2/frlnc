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

        surveyFormSection : {
        	selector : ".//form[@id='survey-form']",
            locateStrategy : 'xpath'
        },

        errorLink : {
        	selector : ".//a[@class='error-link']",
            locateStrategy : 'xpath'
        },

        
};
var surveyPage = {

    validateSurveyFormIsVisible : function(browser){
        browser.useXpath()
        .pause(2000);

        this.waitForElementVisible('@surveyFormSection',this.timeout);
    }
};

module.exports = {
    commands : [surveyPage],
    elements : [pageElements]
};