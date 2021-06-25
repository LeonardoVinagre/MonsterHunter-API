
const all_small_monsters =  document.getElementById('all_small_monsters');
const all_large_monsters =  document.getElementById('all_large_monsters');
const monster_qnt = 60;     
var aux = 0;
var NamesParam = [];


//the function will activate by the amount of monster
const fetchMonsters = async () => {
    
    for(let i = 1 ; i <= monster_qnt ; i++){
        
        await getMonster(i);
    }
}


const getMonster = async id =>{
    const url = `https://mhw-db.com/monsters/${id}`;//save url with a parameter(id)
    const res = await fetch(url);//wait for the request
    const monster = await res.json();//get the promise returned by 'res' and passes to json
    //console.log(monster);
    
    const name = monster.name;
    NamesParam.push(name);
    
    

    if(monster.name != undefined){
        
        if(monster.type == 'small'){
            smallmonster_box(monster);
        }

        else{largemonster_box(monster)}
        
    } if(NamesParam.length == 60){
        console.log(NamesParam);
        return NamesParam;
        
    }  
}

fetchMonsters();

//function ll creat the small monsters data on the site
function smallmonster_box(monster){
    
    //creat <a>
    const monsterEl = document.createElement('a');

    //inserts  the class='monster' to the tag <a>
    monsterEl.classList.add('monster');

    //add the page to monsterEl with monster.id as parameter in the url
    monsterEl.setAttribute('href', "MonsterInfo.html?id="+ `${monster.id}` + "&name=" + `${monster.name}`);

    const monsterInnerHTML = `
        <div class="img-container" >
            
            <img src='Icons/Monster-Icons/${monster.name}.png' width="100px" height="80px">  
            </div>
            
        <p style="color:white" >${monster.name}</p>
    `;
    aux = aux + 1;

    //inserts the code above in monsterEl(<a>)
    monsterEl.innerHTML = monsterInnerHTML;
    
    //add the info on the final of the const
    all_small_monsters.appendChild(monsterEl);

    //check for load screen
    if(aux != 16){
        document.querySelector("body").style.overflow = 'hidden';
    }
    else{
        document.querySelector("body").style.overflow = 'auto';
        document.getElementById("LoadScreen").style.opacity = '0';
        setTimeout(function(){ document.getElementById("LoadScreen").style.display = 'none'; }, 1000);     
    }
    
}

//same as small monster box function
function largemonster_box(monster){
    const monsterEl = document.createElement('a');//const que gera div
    monsterEl.classList.add('monster');//insere classe monster à div'
    monsterEl.setAttribute('href', "MonsterInfo.html?id="+ `${monster.id}` + "&name=" + `${monster.name}`);
    const monster_Image = monster.name.replace("'",' ');

    const monsterInnerHTML = `
        <div class="img-container">
            <img src='Icons/Monster-Icons/${monster_Image}.png' width="100px" height="75px">  
            </div>
        <p style="color:white" >${monster.name}</p>
    `;
   
    monsterEl.innerHTML = monsterInnerHTML;
    
    all_large_monsters.appendChild(monsterEl);


    //function who passes the load screen to the second tab about the large monsters
    let newload = document.getElementById("NewLoad");
    if(newload){
    //starts the loadscreen when the right_arrow is pressed
        document.querySelector("body").style.overflow = 'hidden';
        document.getElementById("NewLoad").style.opacity = '100%';
        setTimeout(function(){ document.getElementById("NewLoad").style.display = 'flex'; }); 
    //When last monster is loaded the loadscreen finish
        if(monster.name == 'Zinogre'){
            document.querySelector("body").style.overflow = 'auto';
            document.getElementById("NewLoad").style.opacity = '0';
            setTimeout(function(){ document.getElementById("NewLoad").style.display = 'none'; }, 1000); 
        }
        
        
    }
    
    
}

        
