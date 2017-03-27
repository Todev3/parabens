process.env.Path += `;${__dirname}\\node_modules\\chromedriver\\lib\\chromedriver\\`;
console.log(process.env);

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder().forBrowser('chrome').build();
