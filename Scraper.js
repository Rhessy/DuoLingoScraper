const puppeteer = require('puppeteer');

const url = "https://www.duolingo.com/";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function Sign_in(page){
    await page.$eval("button[class='_2V6ug _1ursp _7jW2t -TeUZ _2Ccfj']", elem => elem.click());

}

async function Login(page){
    await page.type("input[id='web-ui1']", 'Username');
    await page.type("input[id='web-ui2']", 'password');
    await sleep(2000);
    await page.$eval("button[class='_3fmUm _1rcV8 _1VYyp _1ursp _7jW2t _1QN-w']", elem => elem.click());
    

}

async function practice(page){
    await sleep(2000);
 
    const elements = await page.$$('._2dvyl'); // Get all elements with the class
    await elements[1].click(); // Click the second one (index starts at 0)



}

async function words(page){
    await sleep(2000);

    const practices = await page.$$('._1gEmM'); // Get all elements with the class
    await practices[3].click(); // Click the second one (index starts at 0)

}

async function loadWords(page){
    await sleep(2000);

    for(let i =0; i< 12; i++){
        await sleep(500);
        page.click('._2NNqw');
    }

}

async function Skalper(){
    const page = await initBrowser();
    await Sign_in(page);
    await Login(page);
    await practice(page);
    await words(page);
    await loadWords(page);
    


}











Skalper();