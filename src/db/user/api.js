export const insertIntoDb = (email, password) => {

    //Vars
    const thisEmail = email;
    const thisPassword = password;

    //Json empty
    var thisJson = {}

    //Fill json
    thisJson.email = thisEmail;
    thisJson.password = thisPassword;

    //Petition.
    fetch('http://localhost:3000/api/create-user/', { 
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
        body : JSON.stringify(thisJson),
        mode : 'cors',
    })
    .then(function (response) {
        alert('User has been added. Please, login');
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });

}

export const verifyEmail = () => {

    alert("Login");


}