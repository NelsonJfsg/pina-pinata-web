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
    if(email == undefined || password == undefined){
        alert('Llena todos los campos');
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
        
            console.log(user)
            Axios.post(query, user)
                .then(response => {
                    console.log(response.data);
                    alert(response.data);
                    location.reload();
                }).catch(err => {
                    alert(err.response.data.message);
                });
            

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
        .catch(err => alert("err" + err));
        
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
