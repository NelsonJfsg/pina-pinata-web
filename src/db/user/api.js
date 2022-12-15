import { redirect } from "react-router-dom";
import Axios from 'axios';


export const insertIntoDbOld = (name, lastName, middleName, email, password, role) => {

    //Validate atributes not null
    if(email == '' || password == ''){
        alert('Llena todos los campos');
    }else{

            //Json empty
            var user = {}
        
            //Fill json
            user.name = name;
            user.lastName = lastName;
            user.middleName = middleName;
            user.email = email;
            user.password = password;
            user.role = role;
        
            //Petition.
            fetch('http://localhost:3000/api/auth/user/create-user/', { 
                method : 'POST',
                headers :{
                    'Content-Type' : 'application/json',
                    "Access-Control-Allow-Origin" : "*"
                },
                body : JSON.stringify(user),
                mode : 'cors',
            })
            .then(function (response) {
                alert('Usuario registrado, inicia sesion.');
                console.log(response);
            })
            .then(function (result) {
                alert(result);
            })
            .catch (function (error) {
                console.log('Request failed', error);
            });
    }



}

export const insertIntoDb = (name, lastName, middleName, email, password, role) => {



    
    //Validate atributes not null
    if(email == undefined || password == undefined || password.length < 8){
        alert("llena todos los campos");

        if(password.length < 8){
            alert("Contraseña debe de contener 8 digitos");
        }

    }else{

            let query = 'http://localhost:3000/api/auth/user/create-user/';
            //Json empty
            var user = {}
        
            //Fill json
            user.name = name;
            user.lastName = lastName;
            user.middleName = middleName;
            user.email = email;
            user.password = password;
            user.role = role;
        
            if(name.length < 3){
                alert("Nombre demasiado corto.");
            }else{
                console.log(user)
            Axios.post(query, user)
                .then(response => {
                    console.log(response.data);
                    alert(response.data);
                    location.reload();
                }).catch(err => {
                    console.log("array length" + err.response.data.message.length);
                    console.log("array length" + err.response.data.message[0]);

                    for(var i = 0; i < err.response.data.message.length; i++){

                        switch (err.response.data.message[i]) {
                            case "email must be an email":
                                alert("El correo electronico no es valido.");
                                break;
                            case "name must contain only letters (a-zA-Z)":
                                alert("El nombre debe de contener nomas letras alv");
                                break;
                            case "middleName must contain only letters (a-zA-Z)":
                                alert("Apellido materno debe de contener solo letras.");
                                break;
                            case "lastName must contain only letters (a-zA-Z)":
                                alert("Apellido paterno debe de contener solo letras.");
                                break;
                        }

                    }
                });
        }
    }
}



export const login = (email, password) => {


    //Json empty
    const url = 'http://localhost:3000/api/auth/user/validate-user';
    var user = {}
        
    //Fill json
    user.email = email;
    user.password = password;

    Axios.post(url, user)
        .then(response => { 

            if(response.data){
                window.location.replace("http://localhost:5173/home2");
            }else{
                alert("Credenciales incorrectas.")
            }

        })
        .catch(err => {

           if(password.length < 8){
            alert("La contraseña es demasiado corta, deben de ser 8 digitos");
           }else{
                console.log("array length" + err.response.data.message.length);
                console.log("array length" + err.response.data.message[0]);

                for(var i = 0; i < err.response.data.message.length; i++){

                    switch (err.response.data.message[i]) {
                        case "email must be an email":
                            alert("El correo electronico no es valido.");
                            break;
                        case "name must contain only letters (a-zA-Z)":
                            alert("El nombre debe de contener nomas letras alv");
                            break;
                        case "middleName must contain only letters (a-zA-Z)":
                            alert("Apellido materno debe de contener solo letras.");
                            break;
                        case "lastName must contain only letters (a-zA-Z)":
                            alert("Apellido paterno debe de contener solo letras.");
                            break;
                            
                    }

                }
           }




        });
        
}

export const loginOld = (email, password) => {


    //Json empty
    var user = {}
        
    //Fill json
    user.email = email;
    user.password = password;

    //Petition.
     fetch('http://localhost:3000/api/auth/user/validate-user', { 
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
        body : JSON.stringify(user),
        mode : 'cors',
    })
    .then(function (response) {
        response.json().then(result => {
            if(result){
                alert("Correo y contraseña correctos.");
                
            }else{
                alert("Credenciales incorrectas.");
            }
        })
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });

}
