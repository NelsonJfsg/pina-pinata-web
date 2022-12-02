import './navStyle.css';
import { Link } from "react-router-dom";
import Normalize from 'react-normalize';

export const Nav = () => {

    return(

        <>
            <Normalize/>
            <div className='container-title'>
                <div className='title'>
                    <h1>Piña piñata</h1>
                </div>

                <div className='fondo-nav'>
                    <div className='container-nav'>

                        <Link className='nav-link' to="/Home">Home</Link>
                        <Link className='nav-link' to="/Login">Login</Link>
                        <Link className='nav-link' to="/Register">Register</Link>

                    </div>
                </div>
                

            </div>
            
        </>

    );

}