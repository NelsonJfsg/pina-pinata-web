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
import { useState } from "react";


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
    
    const [error,seterror] =useState(false)

    const handlesumit= ()=>{
        debugger
        if(email==null || password==null||name==null || lastName==null||middleName==null||confirmPassword==null || email==""){
            seterror(true)
            console.log('error')
        }else{
            seterror(false)
            {insertIntoDb(name, lastName, middleName, email, password, role)}
        }
        
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
                        <Label text='Correo'/>
                        <TextField 
                            id='email' 
                            label = 'correo' 
                            variant='outlined'
                            value = {email}
                            onChange={handleChangeEmail}/>
                        <br/>
                            {error && email==null ?
                                <label className="alert">Email no valido favor de ingrsar un Email valido</label>:""}
                    </div>
                        
                    <div className="password">
                        <Label text='Contraseña'/>
                        <TextField 
                            id='password' 
                            label = 'contraseña' 
                            variant='outlined'
                            type = "password"
                            value = {password}
                            onChange={handleChangePassword}/>
                        <br/>
                            {error && password==null ?
                                <label className="alert">contraseña no valido favor de ingrsar un contraseña valido</label>:""}
                    </div>

                    <div className="confirmPassword">
                        <Label text='Confirma contraseña'/>
                        <TextField 
                            id='confirmPassword' 
                            label = 'confirma contraseña' 
                            variant='outlined'
                            type = "password"
                            value = {confirmPassword}
                            onChange={handleChangeConfirmPassword}/>
                        <br/>
                            {error && confirmPassword==null ?
                                <label className="alert">confirma contraseña no valido favor de ingrsar un confirma contraseña valido</label>:""}
                    </div>

                </div>
                
                <div className="personal-information">
                    
                    {/** Nombre */}
                    <div className = "name">
                        <Label text = 'Nombre'/>
                        <TextField  
                            id='name' 
                            label = 'nombre' 
                            variant='outlined'
                            value = {name}
                            onChange={handleChangeName}
                        />
                        <br/>
                        {error && name==null ?
                                <label className="alert">nombre no valido favor de ingrsar un nombre valido</label>:""}
                    </div>

                    {/** Middle name */}
                    <div className = "middleName">
                        <Label text = 'Apellido Paterno'/>
                        <TextField  
                            id='middleName' 
                            label = 'apellido paterno' 
                            variant='outlined'
                            value = {middleName}
                            onChange={handleChangeMiddleName}
                        />
                        <br/>
                        {error && middleName==null ?
                                <label className="alert">apellido paterno no valido favor de ingrsar un apellido paterno valido</label>:""}
                    </div>

                    {/** Last name */}
                    <div className = "lastName">
                        <Label text = 'Apellido Materno'/>
                        <TextField  
                            id='lastName' 
                            label = 'apellido materno' 
                            variant='outlined'
                            value = {lastName}
                            onChange={handleChangeLastName}
                        />
                        <br/>
                        {error && lastName==null ?
                                <label className="alert">Apellido Materno no valido favor de ingrsar un Apellido Materno valido</label>:""}
                    </div>

                </div>


            </form> 
            
            {/* Button */}
            <div className="button-container">

            {/* <Button onClick={() => {insertIntoDb(name, lastName, middleName, email, password, role)}} variant = 'contained'> Registrar</Button> */}
                <Button onClick={handlesumit} variant = 'contained'> Registrar</Button>

            </div>
    
        </form>    

    );



}