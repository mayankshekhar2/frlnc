'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var surveyPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();    
        util.removeHeadlessBrowser(browser);       
        surveyPage = browser.page.SurveyPage();
        var url = browser.launch_url+"survey/";
        browser.url(url);
        browser.maximizeWindow();
        console.log("URL ="+url);        
    },


    'Validate that page has form element' : function (browser) {
        surveyPage.validateSurveyFormIsVisible(browser);
    },

    before : function () {
    	log.logInfo('Start of Test to Validate that survey page has form element.');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Test to Validate that survey page has form element.');
        }
    }
};   