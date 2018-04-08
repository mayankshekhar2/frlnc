'use strict';
var log = require('../custom/log/logger.js');
var util = require('../util/CommonUtil.js');
var args = require('minimist')(process.argv);
var globals = require('../custom/Globals.js');

var blogPage;
var postPostix;

module.exports = {

    'Launch the URL' : function (browser) {
        browser.useXpath();        
        blogPage = browser.page.BlogPage();
        postPostix = "03/12/vue-js-filters-internationalization/"
        var url = browser.launch_url+postPostix
        browser.url(url);
        console.log("URL ="+url);          
    },

    'Validate that that error Page is displayed' : function (browser) {
        blogPage.validateErrorPage(browser);
    },

    before : function () {
    	log.logInfo('Start of Pagination Availability Test');
        return this;
    },

    after : function (browser) {
        try {

        } finally {
            browser.end();
            log.logInfo('End of Pagination Availability Test');
        }
    }
};