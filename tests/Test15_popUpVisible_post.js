'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var postPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();   
        postPage = browser.page.PostPage();
        var url = browser.launch_url+"2018/03/12/vue-js-filters-internationalization/"
        browser.url(url);
        console.log("URL ="+url);      
    },

    'Verify Pop is visible' : function (browser) {
        postPage.verifyPopUpVisible(browser);
    },

    'Close Pop Up' : function (browser) {
        postPage.closePopUp(browser);
    },

    before : function () {
    	log.logInfo('Start of Pop Up Visibility Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Pop Up Visibility Test');
        }
    }
};