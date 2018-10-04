var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 
function logIn() {
	browser.findElement(webdriver.By.css('.js-username-field')).value='';
	browser.findElement(webdriver.By.css('.js-password-field')).value='';
    // browser.getTitle().then(function(title) {
    //     console.log('Current Page Title: ' + title);
    // });
    // return browser.findElements(webdriver.By.css('button.submit.EdgeButton')).then(function(result) {
    //     return result[0];
    // });
}
 
function loginclick(){
	browser.findElements(webdriver.By.css('button.submit.EdgeButton')).click();
}
function clickLink(link) {
    link.click();
}
 
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}
 
function findLoginLink() {
    return browser.findElements(webdriver.By.css('a')).then(function(result) {
        return result[0];
    });
}
 
function closeBrowser() {
    browser.quit();
}
 
browser.get('https://tweetdeck.twitter.com/');
/*browser.findElement(webdriver.By.css('a')).click();

browser.findElement(webdriver.By.css('.js-username-field')).value='yjc433@nyu.edu';
browser.findElement(webdriver.By.css('.js-password-field')).value='malangUU73!';
browser.findElement(webdriver.By.css('button.submit.EdgeButton')).click();*/
//browser.findElement(webdriver.By.name('btnG')).click();
browser.wait(findLoginLink, 2000).then(clickLink);
browser.wait(logIn,2000).then(loginclick);//then(closeBrowser, handleFailure);