
let mostrarocultar = false;
let mostrarocultarinv = false;
let mostraragregarpin = false;
let mostrareliminarpin = false;
let mostrarmodificarpin = false;

function mostrar(id){

    mostrarocultar = !mostrarocultar;

    if(mostrarocultar){
        document.getElementById(id).style.visibility = "visible";
    }else{
        document.getElementById(id).style.visibility = "hidden";
    }
    
} 

function mostrarinventario(id){
    mostrarocultar = !mostrarocultar;

    if(mostrarocultar){
        document.getElementById(id).style.display = "grid";
    }else{
        document.getElementById(id).style.display = "none";
    }
}

function agregarpin(id){
    mostraragregarpin = !mostraragregarpin;

    if(mostrarocultar){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
}

function eliminarpin(id){
    mostrareliminarpin = !mostrareliminarpin;

    if(mostrarocultar){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
}

function modificarpin(id){
    mostrarmodificarpin = !mostrarmodificarpin;

    if(mostrarocultar || mostrareliminarpin || mostraragregarpin){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
}