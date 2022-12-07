import { redirect } from "react-router-dom";

export const insertIntoDb = (name, lastName, middleName, email, password, role) => {

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
            fetch('http://localhost:3000/api/auth/create-user/', { 
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

export const login = (email, password) => {


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
                window.location.replace("http://localhost:5173/home2");
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
