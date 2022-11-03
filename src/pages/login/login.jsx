import "./loginStyle.css";
import { Button } from "../../Modules/button/button";
import { Input } from "../../Modules/input/input";
import { Label } from "./modules/label/label";
import { Title } from "./modules/title/title";

import image1 from "../../assets/images/image1.jpg";



export const Login = () => {
    return (

        <>
            <form className="form-container">
                
                {/* Image */}
                <div>
                    <img className="image" src= {image1}/>

                </div>
            
                {/* Title */}
                <div className="title-container">
                    <Title text='PIÑA PIÑATA'/>
                </div>

                {/* Label */}
                <form className="credential-container">

                    <div className="email">
                        <Label text='Email'/>
                        <Input typeOfInput="email" text = "insert email"/>
                    </div>
                        
                    <div className="password">
                        <Label text='Password'/>
                        <Input typeOfInput="password" text = "insert password"/>
                    </div>

                </form> 
                
                {/* Button */}
                <div className="button-container">
                    <Button text = "Login"/>
                </div>
            
            
            </form>    
        </>


    );
}