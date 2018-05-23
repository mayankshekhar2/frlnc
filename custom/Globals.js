var log = require('../custom/log/logger.js');
var logSummary = require('../custom/log/summary.js');
var args = require('minimist')(process.argv);
var allure = require("nightwatch-allure-adapter");
var utils = require('../util/CommonUtil.js')

var totalTestsPassed = 0;
var totalTestsFailed = 0;
var failedTestNames = new Array();
var passedTestNames = new Array();
var i = 0;
var j = 0;
var p;
var f;
var browserUsed;
var timestamp = String(new Date());
var headlessTF = args['headlessTF'] // Mosts tests are configured to run headless by default, but while running tests individually, setting this true in args will make them not run headless.

module.exports = {
    
    reporter: allure.write,               
    waitForConditionPollInterval : 300,
    waitForConditionTimeout: 90000,
    detailed_output: false,
    shortTimeout: 3000,
	mediumTimeout: 6000,
	longTimeout: 9000,
	

	beforeEach : function (browser, cb) {
		if(headlessTF == 'false'){
			console.log(headlessTF)
			utils.removeHeadlessBrowser(browser);
		}
		else {
			utils.runHeadlessBrowser(browser);
		}
		log.logInfo('Test Started');
		 browserUsed = browser.options.desiredCapabilities.browserName;
		log.logInfo('Test running on browser :' + browserUsed);
		cb();

	},

	afterEach : function (browser, cb) {
		var testName = String(browser.currentTest.module);
		log.logInfo("Test finished for :" + testName);

		var failCount = browser.currentTest.results.failed;
		if (failCount > 0) {
			totalTestsFailed = totalTestsFailed + 1;
			log.logInfo('Test failed:' + testName);
			failedTestNames.push(testName);
		} else if(failCount === 0){
			totalTestsPassed = totalTestsPassed + 1;
			log.logInfo('Test Passed:' + testName);
			passedTestNames.push(testName);
		}
		cb();
	},
	before : function (cb) {
		log.logInfo('Test Suite Started:::' + timestamp);
		logSummary.logInfo('Test Suite Started:::' + timestamp);
		cb();
	},

	after : function (cb) {
		log.logInfo('Test Suite Ended:::' + timestamp);
		log.logInfo(':::Test Summary:::' + timestamp);
		
		logSummary.logInfo('Browser used::'+browserUsed);

		logSummary.logInfo('Test Suite Ended:::' + timestamp);
		logSummary.logInfo(':::Test Summary:::' + timestamp);

		logSummary.logInfo('Total tests passed:::' + totalTestsPassed);
		logSummary.logInfo('Total tests failed:::' + totalTestsFailed);

		for (i = 0; i < passedTestNames.length; ++i) {
			p = passedTestNames[i];
			logSummary.logInfo(p + ':has passed');
		}
		for (j = 0; j < failedTestNames.length; ++j) {
			f = failedTestNames[j];
			logSummary.logInfo(f + ':has failed');
		}

		cb();
	}

};