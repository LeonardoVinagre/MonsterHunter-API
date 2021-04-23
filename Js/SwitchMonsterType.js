

//loads the function when opening the page
window.onload = function hidelarge(){
    document.getElementById("all_large_monsters").style.display = 'none';
    document.getElementById("left_arrow").style.display ='none';
    document.getElementById("right_arrow").onclick = (switch_Large);
    document.getElementById("left_arrow").onclick = (switch_Small);
}

//change the button between small our large monster
function switch_Small(){

    
    const change = document.getElementById("Title").innerHTML = ("SMALL MONSTERS");
    document.getElementById("all_small_monsters").style.display = '';
    document.getElementById("all_large_monsters").style.display = 'none';
    document.getElementById("left_arrow").style.display ='none';
    document.getElementById("right_arrow").style.display ='';
    document.getElementById("NewLoad").id = "LoadScreen";
    
    }

function switch_Large(){
    const change = document.getElementById("Title").innerHTML = ("LARGE MONSTERS");
    document.getElementById("all_small_monsters").style.display ='none';
    document.getElementById("all_large_monsters").style.display = '';
    document.getElementById("right_arrow").style.display ='none';
    document.getElementById("left_arrow").style.display ='';
    document.getElementById("LoadScreen").id = "NewLoad";
    
    
}

   
