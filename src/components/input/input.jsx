import "../input/inputStyle.css";

export const Input = ({typeOfInput, text}) => {

    return(

        <>
            <div>
                <input className="input" type = {typeOfInput} placeholder = {text}/>
            </div>
        </>

    );

}