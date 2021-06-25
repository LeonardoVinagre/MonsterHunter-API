
const All_Names = [ "Gajau", "Kelbi", "Raphinos", "Shamos", "Girros", "Hornetaur", "Gastodon", "Barnos", "Great Jagras", "Kulu-Ya-Ku", "Pukei-Pukei", "Barroth", "Jyuratodus", "Tobi-Kadachi", "Anjanath", "Azure Rathalos", "Bazelgeuse", "Behemoth", "Deviljho", "Diablos", "Black Diablos", "Dodogama", "Great Girros", "Kirin", "Kulve Taroth", "Kushala Daora", "Lavasioth", "Legiana", "Lunastra", "Nergigante", "Odogaron", "Paolumu", "Radobaan", "Rathalos", "Rathian", "Pink Rathian", "Teostra", "Tzitzi-Ya-Ku", "Uragaan", "Vaal Hazak", "Xeno'jiiva", "Zorah Magdaros", "Leshen", "Ancient Leshen", "Safi'jiiva", "Stygian Zinogre", "Rajang", "Viper Tobi-Kadachi", "Namielle", "Zinogre"];

const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');

async function Scrape_Monsters_Img(url,Name){
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.goto(url);

    const [Img_PATH] = await page.$x('//*[@id="mw-content-text"]/div/aside/figure/a/img');
    const Img_src    = await Img_PATH.getProperty('src');
    const Img_Txt    = await Img_src.jsonValue();
    console.log(Img_Txt);
    
    


    const file = fs.createWriteStream(`./Monsters-Images/Icons/${Name}.png`);
    
    const request = await https.get(Img_Txt, function(response) {
    
    response.pipe(file);
    
    });
    await browser.close();

}


const Get_Images = async () => {
    
    for(let i = 0 ; i < All_Names.length ; i++){
        url = `https://monsterhunter.fandom.com/wiki/${All_Names[i]}`  

        await Scrape_Monsters_Img(url,All_Names[i]);
    }
    return 0; 
}

Get_Images();
