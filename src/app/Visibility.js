
let mostrarocultar = false;
let mostrarocultarinv = false;
let mostraragregarpin = false;
let mostrareliminarpin = false;
let mostrarmodificarpin = false;


function mostrarinventario(id){
    mostrarocultarinv = !mostrarocultarinv;

    if(!mostrarocultarinv){
        document.getElementById(id).style.display = "none";
    }else{
        if(mostraragregarpin){
            agregarpin("agregarpiñata");
            if(mostrarocultarinv){
                document.getElementById(id).style.display = "grid";
            }
        }else{
            document.getElementById(id).style.display = "grid";
        }
    }
}

function agregarpin(id){
    mostraragregarpin = !mostraragregarpin;

    if(!mostraragregarpin){
        document.getElementById(id).style.display = "none";
    }else{
        if(mostrarocultarinv){
            mostrarinventario("inventarioactual");
            if(mostraragregarpin){
                document.getElementById(id).style.display = "block";
            }
        }else{
            document.getElementById(id).style.display = "block";
        }
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