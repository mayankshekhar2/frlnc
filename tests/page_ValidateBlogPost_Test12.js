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
        postPostix = "2018/03/12/vue-js-filters-internationalization/"
        var url = browser.launch_url+postPostix
        browser.url(url);
        console.log("URL ="+url);          
    },

    'Close Pop Up' : function (browser) {
        blogPage.closePopUp(browser);        
    },
    
    'Validate that current page is Post that was opened' : function (browser) {
        blogPage.validatePostPage(browser,postPostix);
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