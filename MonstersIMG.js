const puppeteer = require('puppeteer');


async function Scrape_Monsters_Img(url){
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.goto(url);

    const [Img_PATH] = await page.$x('//*[@id="mw-content-text"]/div/aside/figure/a/img');
    const Img_src  = await Img_PATH.getProperty('src');
    const Img_Txt  = await Img_src.jsonValue();

    console.log(Img_Txt);
}

Scrape_Monsters_Img('https://monsterhunter.fandom.com/wiki/Rathalos');