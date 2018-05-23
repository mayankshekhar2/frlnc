# VueJS QA
For Testing UI related Test cases of VueJS

## Install the required modules 
Open the command prompt and navigate to the folder where the code is cloned. And run "npm install" command
	
Note: if no {version} is specified then by default the latest version of the specified module will be installed.

## Driver path setting to the Environment Variables
1. Go to Environment Variables and set the chrome driver path in "User Variable -> Path" variable
	i.e., Add the chromedriver path to the "Path" variable under "User 	Variables".
	
## Start the Selenium Server (if it is a downloaded jar file)
1. Open the command prompt and navigate to the folder where the code is cloned.
2. Start the selenium server by running the below command.
  `java -jar lib/jars/selenium-server-standalone-2.53.0.jar`

Note: 
1. If the selenium server is already running, then we do not need to run the above steps again.
2. And if any error is thrown related to browser then start the selenium server with the browser details like below:
`java -jar <projectDirectory>/lib/jars/selenium-server-standalone-2.53.0.jar -Dwebdriver.chrome.driver=<projectDirectory>\lib\browserDrivers\chromedriver.exe 


## To Run

```sh
npm run test # all tests
nightwatch tests\<testName>.js # specific test
```


##Logs

* Logs are found in Reports folder with .log extension made available through Bunyan

##Reports

* Reports will be in Junit XML format and also Allure Report

```bash
To see JUnit Report on Mac : npm run report
To see Allure Report on Mac : npm run allureReport
To see JUnit Report on Windows : npm run report_win
To see Allure Report on Windows : npm run allureReport_win
```

