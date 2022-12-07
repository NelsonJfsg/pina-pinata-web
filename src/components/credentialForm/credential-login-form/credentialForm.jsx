//components
import { Title } from "../title/title";
//import { Button } from "../../components/button/button";
import { Label } from "../label/label";

//Material
import Button from '@mui/material/Button';

//Assets
import Logo from '../../../assets/images/logo.jpg';

import {insertIntoDb} from '../../../db/user/api'

//My imorts.

//Api
import {login} from '../../../db/user/api'


//Style
import "./credentialFormStyles.css";
import { TextField } from "@mui/material";
import { User } from "../../../models/user";


export const CredentialForm = ({buttonText}) => {

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
                    <Label text='Correo'/>
                    <TextField 
                        id='email' 
                        label = 'correo' 
                        variant='outlined'
                        value = {thisEmail}
                        onChange={handleChangeEmail}/>
                </div>
                    
                <div className="password">
                    <Label text='Contraseña'/>
                    <TextField 
                        id='password' 
                        label = 'contraseña' 
                        variant='outlined'
                        value = {thisPassword}
                        onChange={handleChangePassword}/>
                </div>
                

            </form> 
            
            {/* Button */}
            <div className="button-container">

                <Button onClick={() => {
                    login(thisEmail, thisPassword)
                    
                    }} variant = 'contained'> Iniciar Sesión </Button>

            </div>
    
        </form>    

    );



}