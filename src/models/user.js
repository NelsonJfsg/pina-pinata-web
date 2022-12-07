export class User {
        
    //Atributes
    
    id = 0;
    role = 0;

    name = null;
    lastName = null;
    middleName = null;

    email = null;
    password = null;




    //Init
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

}