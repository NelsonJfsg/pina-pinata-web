
let mostrarocultar = false;

function mostrar(id){

    mostrarocultar = !mostrarocultar;

    if(mostrarocultar){
        document.getElementById(id).style.visibility = "visible";
    }else{
        document.getElementById(id).style.visibility = "hidden";
    }
    
} 