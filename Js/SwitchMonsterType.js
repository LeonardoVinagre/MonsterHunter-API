//loads the function when opening the page
window.onload = function hidelarge(){
    document.getElementById("all_large_monsters").style.display = 'none';
    document.getElementById("left_arrow").style.display ='none';
}

//change the button between small our large monster
function switch_btn(){

    if(document.getElementById("check").checked){
    const change = document.getElementById("Title").innerHTML = ("SMALL MONSTERS");
    document.getElementById("all_small_monsters").style.display = '';
    document.getElementById("all_large_monsters").style.display = 'none';
    document.getElementById("left_arrow").style.display ='none';
    document.getElementById("right_arrow").style.display ='';
    
    }

    else{
        const change = document.getElementById("Title").innerHTML = ("LARGE MONSTERS");
        document.getElementById("all_small_monsters").style.display ='none';
        document.getElementById("all_large_monsters").style.display = '';
        document.getElementById("right_arrow").style.display ='none';
        document.getElementById("left_arrow").style.display ='';
        check_btn();
    }
}

