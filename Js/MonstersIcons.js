const All_Names = ["Aptonoth", "Jagras", "Mernos", "Vespoid", "Mosswine", "Apceros", "Kestodon", "Noios", "Gajau", "Kelbi", "Raphinos", "Shamos", "Girros", "Hornetaur", "Gastodon", "Barnos", "Great Jagras", "Kulu-Ya-Ku", "Pukei-Pukei", "Barroth", "Jyuratodus", "Tobi-Kadachi", "Anjanath", "Azure Rathalos", "Bazelgeuse", "Behemoth", "Deviljho", "Diablos", "Black Diablos", "Dodogama", "Great Girros", "Kirin", "Kulve Taroth", "Kushala Daora", "Lavasioth", "Legiana", "Lunastra", "Nergigante", "Odogaron", "Paolumu", "Radobaan", "Rathalos", "Rathian", "Pink Rathian", "Teostra", "Tzitzi-Ya-Ku", "Uragaan", "Vaal Hazak", "Xeno'jiiva", "Zorah Magdaros", "Leshen", "Ancient Leshen", "Safi'jiiva", "Stygian Zinogre", "Rajang", "Viper Tobi-Kadachi", "Namielle", "Zinogre"];
const Names_For_Icons = [];

//Get the required names for donwload icons
for(i = 0 ; i < All_Names.length ; i++)
{
    Names_For_Icons[i] = All_Names[i].toLowerCase();
    Names_For_Icons[i] = Names_For_Icons[i].replace(" ", "_");
}




const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

async function Scrape_Monsters_Img(url,Name){
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.goto(url);

    const Img_Txt    = url;
    Name = Name[0].toUpperCase() + Name.substr(1);
    Name = Name.replace("'", " ");
    Name = Name.replace("_", " ");
    
    const file       =    await fs.createWriteStream(`./Monsters-Images/Icons/${Name}.png`);
    console.log('Downloading ' + Name);
    const request    = await https.get(Img_Txt, function(response) {
    
    response.pipe(file);
    

});

await browser.close();
}



const Get_Images = async () => {
    
    for(let i = 0 ; i < Names_For_Icons.length ; i++){
        url = 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-'+`${Names_For_Icons[i]}` + '_icon2.png'
        
       
        if( UrlExists(url) == 404)
        {
            url = 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-'+`${Names_For_Icons[i]}` + '_icon.png'
            if(UrlExists(url) == 404)
            {
                url = 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-'+`${Names_For_Icons[i]}` + '_icon.png'
                await Scrape_Monsters_Img(url,Names_For_Icons[i]);

            }
            else await Scrape_Monsters_Img(url,Names_For_Icons[i]);
        }
        else await Scrape_Monsters_Img(url,Names_For_Icons[i]);

        
    }
    return 0; 
}

Get_Images();


function UrlExists(url) 
{
    var http = new XMLHttpRequest();
    http.open('GET', url, false);
    http.send();
    
    return http.status;
        
}

