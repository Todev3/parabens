process.env.Path += `;${__dirname}\\node_modules\\chromedriver\\lib\\chromedriver\\`;

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

driver.get('https://www.facebook.com/events/birthdays');
driver.wait(until.elementLocated(by.xpath('//*[@id="facebook"]/body/div[15]/div[1]')));
driver.findElement(by.xpath('//*[@id="facebook"]/body/div[15]/div[1]')).click();
driver.wait(until.elementLocated(by.xpath('//*[@id="events_birthday_view"]/div[2]/div[2]/ul/li/div/div/div/div[2]/div/div[2]/div[1]')));
var tagNome = driver.findElement(by.xpath('//*[@id="events_birthday_view"]/div[2]/div[2]/ul/li/div/div/div/div[2]/div/div[2]/div[1]'));
tagNome.getText().then(nome => {
  nome = nome.split(" ", 1);
  driver.findElement(by.xpath('//*[@id="u_0_v"]')).sendKeys('Parabens ' + nome + ' tudo de bom xD');
  driver.findElement(by.xpath('//*[@id="u_0_v"]')).sendKeys(key.ENTER);
});
