'use strict';
/*
 * Logger script using Bunyan to create a custom logger
 */

var bunyan = require('bunyan');
var logObj = bunyan.createLogger({
    name : 'VuJsTests',
    streams : [{
        path : './reports/VueJS_Tests.log'
        // `type: 'file'` is implied
    }]
});

module.exports = {
    logInfo : function (message) {
        logObj.info(message);
        return this;
    }
};