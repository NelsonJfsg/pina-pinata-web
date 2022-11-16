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
            user.middleName = lastName;
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
                return response.json();
            })
            .then(function (result) {
                alert(result);
            })
            .catch (function (error) {
                console.log('Request failed', error);
            });
    }

}

/**
 * 
 * export const verifyEmail = (email, password) => {
    //Vars
    const email = email;
    const password = password;

    //Json empty
    var thisJson = {}
        
    //Fill json
    thisJson.email = email;
    thisJson.password = password;

    console.log(JSON.stringify(thisJson));

    //Petition.
    fetch('http://localhost:3000/api/auth/verify-credential/', { 
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
        body : JSON.stringify(thisJson),
        mode : 'cors',
    })
    .then(function (response) {
        alert('check this');
        
        if(response.json()){
            alert("Usuario ya registrado.");
        }else{
            alert("Usuario no registrado.");
        }

    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });

}
 * 
 * 
 * 
 * 
 * 
 */