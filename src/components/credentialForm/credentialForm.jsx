//components
import { Title } from "./title/title";
import { Button } from "../../components/button/button";
import { Label } from "./label/label";
import { Input } from "../input/input";

//Assets
import Logo from '../../assets/images/logo.jpg';

//Style
import "./credentialFormStyles.css";


export const CredentialForm = ({buttonText}) => {

    return(

        <form className="form-container">
                
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
                    <Label text='Email'/>
                    <Input typeOfInput="email" text = "Insert email"/>
                </div>
                    
                <div className="password">
                    <Label text='Password'/>
                    <Input typeOfInput="password" text = "Insert password"/>
                </div>

            </form> 
            
            {/* Button */}
            <div className="button-container">
                <Button text = {buttonText}/>
            </div>
        
    
        </form>    


    );



}