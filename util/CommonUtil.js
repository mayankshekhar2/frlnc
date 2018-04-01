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
        
    }
};