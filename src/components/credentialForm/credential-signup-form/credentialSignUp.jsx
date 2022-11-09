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
    var thisEmail;
    var thisPassword;
    
    //Set email value
    const handleChangeEmail = (event) => {
        thisEmail = event.target.value;
        console.log(thisEmail);
    }
    
    //Set password value
    const handleChangePassword = (event) => {
        thisPassword = event.target.value;
        console.log(thisPassword);
    }
    
    return(

        <form className= "login-container">
                
             <div>
                <img className="image" src= {Logo}/>
            </div> 

            {/* Title */}
            <div className="title-container">
                <Title text='PIÑA PIÑATA'/>
            </div>

            {/* Inputs */}
            <form className="credential-container">

                <div className="email">
                    <Label text='Email'/>
                    <TextField 
                        id='email' 
                        label = 'email' 
                        variant='outlined'
                        value = {thisEmail}
                        onChange={handleChangeEmail}/>
                </div>
                    
                <div className="password">
                    <Label text='Password'/>
                    <TextField 
                        id='password' 
                        label = 'password' 
                        variant='outlined'
                        value = {thisPassword}
                        onChange={handleChangePassword}/>
                </div>
                

            </form> 
            
            {/* Button */}
            <div className="button-container">

                <Button onClick={() => {insertIntoDb(thisEmail, thisPassword)}} variant = 'contained'> Sign Up</Button>

            </div>
    
        </form>    

    );



}