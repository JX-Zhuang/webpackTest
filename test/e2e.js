var webdriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://127.0.0.1:5560/');
driver.findElement(By.className('addGoodEvent')).click();
driver.wait(until.elementLocated(By.className('show-num')), 10000);
driver.findElement(By.className('addBadEvent')).click();
driver.wait(until.elementLocated(By.className('show-num')), 10000);
driver.quit();