import './navStyle.css';
import { Link } from "react-router-dom";
import Normalize from 'react-normalize';

export const Nav = () => {

    return(

        <>
            <Normalize/>
            <div className='container-title'>
                <div className='title'>
                    <h1>Piña Piñata</h1>
                </div>

                <div className='fondo-nav'>
                    <div className='container-nav'>

                        <Link className='nav-link' to="/">Inicio</Link>
                        <Link className='nav-link' to="/Login">Iniciar Sesión</Link>
                        <Link className='nav-link' to="/Register">Registrar</Link>

                    </div>
                </div>
                

            </div>
            
        </>

    );

}