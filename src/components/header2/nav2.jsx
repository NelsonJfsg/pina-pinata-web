import '../header/nav/navStyle.css';
import { Link } from "react-router-dom";
import Normalize from 'react-normalize';

export const Nav2 = () => {

    return(

        <>
            <Normalize/>
            <div className='container-title'>
                <div className='title'>
                    <h1>Piña Piñata</h1>
                </div>

                <div className='fondo-nav'>

                    <div className='container-nav'>

                        <Link className='nav-link' to="/home2">Inicio</Link>
                        <Link className='nav-link' to="/tendencias">Tendencias</Link>
                        <Link className='nav-link' to="/inventario">Inventario</Link>
                        <Link className='nav-link' to="/profile">Perfil</Link>
                        <button className='boton-cerrar-sesion' onClick={() => window.location.replace("http://localhost:5173/login")}>Cerrar sesion</button>
                    </div>

                </div>
                

            </div>
            
        </>

    );

}