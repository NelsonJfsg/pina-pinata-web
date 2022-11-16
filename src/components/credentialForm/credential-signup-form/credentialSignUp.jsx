//components
import { Title } from "../title/title";
//import { Button } from "../../components/button/button";
import { Label } from "../label/label";

//Material
import Button from '@mui/material/Button';

//Assets
import Logo from '../../../assets/images/logo.jpg';

//My imorts.

//Api
import {insertIntoDb} from '../../../db/user/api'


//Style
import "./credentialSignUpStyle.css";
import { TextField } from "@mui/material";


export const CredentialSignUp = ({buttonText}) => {

    //Vars
    var name;
    var middleName;
    var lastName;

    var email;
    var password;
    var confirmPassword;
    var role = 1;
    
    //Set email value
    const handleChangeEmail = (event) => {
        email = event.target.value;
        console.log(email);
    }
    
    //Set password value
    const handleChangePassword = (event) => {
        password = event.target.value;
        console.log(password);
    }

    //Set name value
    const handleChangeName = (event) => {
        name = event.target.value;
    }
    
    const handleChangeLastName = (event) => {
        lastName = event.target.value;
    }
    
    const handleChangeMiddleName = (event) => {
        middleName = event.target.value;
    }

    const handleChangeConfirmPassword = (event) => {
        confirmPassword = event.target.value;
    }
    
    
    
    return(

        <form className= "register-container">
                
             <div>
                <img className="image" src= {Logo}/>
            </div> 

            {/* Title */}
            <div className="title-container">
                <Title text='PIÑA PIÑATA'/>
            </div>

            {/* Inputs */}
            <form className="credential-container">

                <div className="credential-information">
                    <div className="email">
                        <Label text='Email'/>
                        <TextField 
                            id='email' 
                            label = 'email' 
                            variant='outlined'
                            value = {email}
                            onChange={handleChangeEmail}/>
                    </div>
                        
                    <div className="password">
                        <Label text='Password'/>
                        <TextField 
                            id='password' 
                            label = 'password' 
                            variant='outlined'
                            type = "password"
                            value = {password}
                            onChange={handleChangePassword}/>
                    </div>

                    <div className="confirmPassword">
                        <Label text='confirm password'/>
                        <TextField 
                            id='confirmPassword' 
                            label = 'confirm password' 
                            variant='outlined'
                            type = "password"
                            value = {confirmPassword}
                            onChange={handleChangeConfirmPassword}/>
                    </div>

                </div>
                
                <div className="personal-information">
                    
                    {/** Name */}
                    <div className = "name">
                        <Label text = 'Name'/>
                        <TextField  
                            id='name' 
                            label = 'name' 
                            variant='outlined'
                            value = {name}
                            onChange={handleChangeName}
                        />
                    </div>

                    {/** Last name */}
                    <div className = "lastName">
                        <Label text = 'last name'/>
                        <TextField  
                            id='lastName' 
                            label = 'lastName' 
                            variant='outlined'
                            value = {lastName}
                            onChange={handleChangeLastName}
                        />
                    </div>

                    {/** Middle name */}
                    <div className = "middleName">
                        <Label text = 'middle name'/>
                        <TextField  
                            id='middleName' 
                            label = 'middleName' 
                            variant='outlined'
                            value = {middleName}
                            onChange={handleChangeMiddleName}
                        />
                    </div>

                </div>


            </form> 
            
            {/* Button */}
            <div className="button-container">

                <Button onClick={() => {insertIntoDb(name, lastName, middleName, email, password, role)}} variant = 'contained'> Sign Up</Button>

            </div>
    
        </form>    

    );



}