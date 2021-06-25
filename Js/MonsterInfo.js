//Imported Functions
import {ToUpper, ConcatenatesElements}  from './UpperCase.js'       ; // UpperCase Function
import * as GetMonsterParam             from './GetMonsterParam.js' ; // Get the monster page link

//-----------------------------------------------------------------------------

const Selected_Monster_Info = document.getElementById('Selected_Monster_Info');




const urlId = GetMonsterParam.urlId;

const getMonster = async id =>{
    const url     = `https://mhw-db.com/monsters/${id}`;//saves url as parameter
    const res     = await fetch(url);//wait the request of url and return as promisse
    const monster = await res.json();//convert the promisse to json
    console.log(monster);
    Info_Gen(monster);
}

function Info_Gen(monster){
    //const that saves a <div> element
    const monsterInfo = document.createElement('div');

    //add the 'container' class to the div above
    monsterInfo.classList.add('container');

    //set the name of the monster on the div with the id ='Monster_name'
    const monster_name = document.getElementById("Monster_name").innerHTML = (monster.name);
    const ConcElements = ConcatenatesElements(monster.elements);
    //saves all the code in the const
    const monsterInnerHTML = `


        <div class="left-top">
            <img id="img" src="Monsters-Images/${monster.name}.PNG">
        </div>
        
        <div class="right">
            <div class="info">
                <p >First Encounter: ${monster.locations[0].name}</p>
                <p >Specie: ${ToUpper(monster.species)}</p>
                <p >Type: ${ToUpper(monster.type)}</p>
                <p >Elements: ${ConcElements}</p>
                <p >Weaknesses:</p>            
            </div>
            <div class="weakness">
                <ul id="esq">
                    
                </ul>
                <ul id="dir">
                    
                </ul>
            </div>
        </div>

        <div class="left-botton">
            <header>
                <h3>Description</h3>
                <hr width="75%">
            </header>
            <main>
                <p>${monster.description}</p>
            </main>
        </div>

`
     
    ;
    //inserts the code above on the div created before
    monsterInfo.innerHTML = monsterInnerHTML;

    //add monsterInfo to the final of the const
    Selected_Monster_Info.appendChild(monsterInfo);


    
    creat_weak(monster, (monster.weaknesses).length);
    
}

getMonster(urlId)




/*function that receives the monster and the extent of weaknesses,
 capitalize the first letters and insert the stars of each*/
function creat_weak(monster, weak_len){
    var ul_esq = document.getElementById("esq");
    var ul_dir = document.getElementById("dir");
    var new_li;
    var img_innerHTML;
    for( let i = 0 ; i < weak_len ; i++ ){

        if(i < Math.round(weak_len/2)){
            new_li = document.createElement("li");
            new_li.setAttribute('id', 'weak' + i);
            ul_esq.appendChild(new_li);
            img_innerHTML = `<img width="20px" class="weak-effect" src="Icons/Elements/${monster.weaknesses[i].element}.PNG">`;
            
        }
        else{
            new_li = document.createElement("li");
            new_li.setAttribute('id', 'weak' + i);
            ul_dir.appendChild(new_li);
            img_innerHTML = `<img width="20px" class="weak-effect" src="Icons/Elements/${monster.weaknesses[i].element}.PNG">`;

        }
        

        let string = monster.weaknesses[i].element;
       // document.getElementById("weak-icon" + i).src = (string + '.PNG');

        var str = '';
        for( let j = 1 ; j <= monster.weaknesses[i].stars ; j++){

            str += '⭐'         
            if(j == monster.weaknesses[i].stars){
                document.getElementById("weak"+i).innerHTML = img_innerHTML + ToUpper(monster.weaknesses[i].element)+ ": " + str;
                 
            }
        }
        
      
    }
    
}
