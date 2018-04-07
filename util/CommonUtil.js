'use strict';
var log = require('../custom/log/logger.js');
var csv = require('ya-csv');

module.exports = {
    validateValuesInCookie : function (browser,UIVal,cookieVal) {
        var str = cookieVal.toString();
        if (typeof String.prototype.contains === 'undefined') { String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; }
        var index = str.includes(UIVal,function(result){
            browser.pause(2000)
            .assert.value(index,true);
        });
        
    },

    getJSONObj : function (cookie){
        var nSt1 = cookie.replace(/%22/g,'"');
        var nSt2 = nSt1.replace(/%2C/g,',');
        var nSt3 = nSt2.replace(/ /g,'');
        // console.log(nSt3);
        var jsonObj = JSON.parse(nSt3);
        return jsonObj;
    },

    getBlogPositioninJSON : function (urlUI,cookieJSON){
        var len = cookieJSON.length;
        for(var i=0;i<len;i++){
            if(urlUI == cookieJSON[i].url){
                return i;
            }
        }
        return -1;
    },

    removeHeadlessBrowser : function (browser){
        var a=browser.options.desiredCapabilities.chromeOptions;
        browser.options.desiredCapabilities.chromeOptions.args = ['disable-extensions']
        console.log(a.args);
    }
};