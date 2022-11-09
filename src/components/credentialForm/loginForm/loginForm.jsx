import { useState } from "react";
import { Form } from "react-router-dom";

export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {

        alert(email);
        alert(password);

    }


    return(
        <>
        
            <form onSubmit={event => {
                event.preventDefault();
                setEmail(event.target.tbEmail.value);
                setPassword(event.target.tbPassword.value);
            }}>

                <input 
                    type = 'email'
                    name = 'tbEmail'
                    onChange={event => setEmail(event.target.value)}>
                    
                </input>
                
                <input 
                    type='password'
                    name = 'tbPassword'>

                </input>

                <button onClick={checkCredentials}> iniciar sesion</button>

            </form>
        
        </>

    );



}