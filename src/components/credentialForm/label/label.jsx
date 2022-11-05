import "./labelStyle.css";

export const Label = ({text}) => {

    return(

        <>
            <div>
                <label className="label">{text}</label>
            </div>
        </>

    );


}