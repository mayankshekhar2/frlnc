'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var postPage;
var postPostix;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();
        util.removeHeadlessBrowser(browser);
        postPostix = "2018/03/12/vue-js-filters-internationalization/"
        var url = browser.launch_url+postPostix   
        postPage = browser.page.PostPage();
        browser.url(url);        
    },

    'Close Pop Up' : function (browser) {
        postPage.closePopUp(browser);
    },
    
    'Validate Fb Counts for Post' : function (browser) {
        postPage.ValidateFbCountsForPost(browser);
    },

    'Validate Twitter Counts for Post' : function (browser) {
        postPage.ValidateTwitterCountsForPost(browser);
    },

    'Validate Google Plus Counts for Post' : function (browser) {
        postPage.ValidatePlusCountsForPost(browser);
    },

    before : function () {
    	log.logInfo('Start of Social Counter Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Social Counter Test');
        }
    }
};