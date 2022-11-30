//IMPORTS

//My imports
import './buttonStyle.css';

export const Button = ({ text, buttonId}) => {

    return (

        <>
            <div>
                <input
                    onClick={handleClick}
                    className='button'
                    name = {buttonId}
                    type="button"
                    value={text} />
            </div>
        </>

    );

}