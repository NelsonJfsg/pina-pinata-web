//components
import { Title } from "./title/title";
import { Button } from "../../components/button/button";
import { Label } from "./label/label";
import { Input } from "../input/input";

//Assets
import Logo from '../../assets/images/logo.jpg';

//Style
import "./credentialFormRStyles.css";


export const CredentialFormR = ({buttonText}) => {

    return(

        <form className="register-container">
                
             <div>
                <img className="image" src= {Logo}/>
            </div> 

            {/* Title */}
            <div className="title-container">
                <Title text='PIÑA PIÑATA'/>
            </div>

            {/* Label */}
            <form className="credential-container">

                <div className="email">
                    <Label text='Correo electrónico'/>
                    <Input typeOfInput="email"/>
                </div>
                    
                <div className="password">
                    <Label text='Contraseña'/>
                    <Input typeOfInput="password"/>
                </div>

                <div className="name">
                    <Label text='Nombre'/>
                    <Input typeOfInput="name"/>
                </div>

            </form> 
            
            {/* Button */}
            <div className="button-container">
                <Button text = {buttonText}/>
            </div>
        
    
        </form>    


    );



}