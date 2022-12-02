import '../header/nav/navStyle.css';
import { Link } from "react-router-dom";
import Normalize from 'react-normalize';

export const Nav2 = () => {

    return(

        <>
            <Normalize/>
            <div className='container-title'>
                <div className='title'>
                    <h1>Piña piñata</h1>
                </div>

                <div className='container-nav'>

                    <Link className='nav-link' to="/Home2">Home</Link>
                    <Link className='nav-link' to="/Home2">Tendencias</Link>
                    <Link className='nav-link' to="/Home2">Carrito</Link>
                    <Link className='nav-link' to="/Home2">Perfil</Link>

                </div>

            </div>
            
        </>

    );

}