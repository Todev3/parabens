process.env.Path += `;${__dirname}\\node_modules\\chromedriver\\lib\\chromedriver\\`;
console.log(process.env);

const webDriver = require('selenium-webdriver');
const by = webDriver.By;
const until = webDriver.until;
const key   = webDriver.Key;

const driver = new webDriver.Builder().forBrowser('chrome').build();

driver.get('https://www.facebook.com/');

driver.wait(until.elementLocated(by.xpath('//*[@id="email"]')));
driver.findElement(by.xpath('//*[@id="email"]')).sendKeys('');
driver.findElement(by.xpath('//*[@id="pass"]')).sendKeys('');
driver.findElement(by.xpath('//*[@id="loginbutton"]')).click();
