import { useState } from "react";
import "../input/inputStyle.css";

export var field;

export const Input = ({typeOfInput, text}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        field = event.target.value;
    }

    const onSubmit = (event) => {
        event.preventDefault();


    }
    return(

        <>
            <form onSubmit={onSubmit}>
                <input 
                    className="input" 
                    type = {typeOfInput} 
                    placeholder = {inputValue}
                    id = "message"
                    onChange={(event) => onInputChange(event)}
                    value= {inputValue}
                    
                    
                    />
            </form>
        </>

    );

}