'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var postPage;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();    
        util.removeHeadlessBrowser(browser);         
        postPage = browser.page.PostPage();
        var url = browser.launch_url+"2018/03/12/vue-js-filters-internationalization/"
        browser.url(url);
        browser.maximizeWindow();
        console.log("URL ="+url);        
    },

    'Close Pop Up' : function (browser) {
        postPage.closePopUp(browser);
    },
    
    'Validate that comment counter is present for post' : function (browser) {
        postPage.validateCommentCounterPresent(browser);
    },

    before : function () {
    	log.logInfo('Start of Comments Counter on Post Page Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Comments Counter on Post Page Test');
        }
    }
};