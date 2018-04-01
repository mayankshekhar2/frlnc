# testdata
Generates testdata for ecommerce tests

## To clone the code to the local machine/desktop.

Check out master using following steps
```sh
    git init
    git remote add origin https://username:password@github.com/nytm/testdata.git
    git fetch origin
```


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
`java -jar C:/testdata-master/testdata-master/lib/jars/selenium-server-standalone-2.53.0.jar -Dwebdriver.chrome.driver=C:\testdata-master\testdata-master\lib\browserDrivers\chromedriver.exe 


## To Run
* Open another command prompt and navigate to the folder where the code is cloned.
*  For running Testdata creation script, execute the command in following syntax
	nightwatch tests/TestdataWrapper.js --OC=<oc> --count=<count>
	
Eg. execute the following command in command line, to create 2 set of testdata for the OC=455214 -
	nightwatch tests/TestdataWrapper.js --OC=455214 --count=2

## User data

* User data created through scripts is stored in data folder through Sqlite3

##Logs

* Logs are found in Reports folder with .log extension made available through Bunyan

 
##SubscriptionDetails

* All the subscription details like Regi ID and Email Address details will be saved to "ecommtestdata.log" file under "reports/accounts" folder.

##Reports

* Reports will be in Junit XML format
* Use junit-viewer module to view the report
```sh
npm install -g junit-viewer
```
* Reports will be in Junit XML format
```sh
junit-viewer -results=reports -save=reports\rep.html -minify=false
```

