//IMPORTS

//My imports
import './buttonStyle.css';

export const Button = ({text}) => {

    return(

        <>
            <div>
                <input className='button' type="button" value={text} />
            </div>
        </>
    
    );

}