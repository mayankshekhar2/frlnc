'use strict';
/*
 * Logger script using Bunyan to create a custom logger for test summary
 */

var bunyan = require('bunyan');
var logObj = bunyan.createLogger({
    name : 'EcommQAAutomationTestSummary',
    streams : [{
        path : './reports/ecommqasummary.log'
        // `type: 'file'` is implied
    }]
});

module.exports = {
    logInfo : function (message) {
        logObj.info(message);
        return this;
    }
};