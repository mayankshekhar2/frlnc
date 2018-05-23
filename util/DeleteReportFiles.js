var del = require('delete');
// sync 
del.sync(['reports/*']);
del.sync(['allure-results/*']);
del.sync(['allure-report/*']);
