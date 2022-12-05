import "./profileStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import "../../../components/cards/cardsStyle.css";
import { style } from "@mui/system";


export const Profile = () => {

    return (

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>
            <div className="contenedor">
                <h1>Perfil</h1>

                <h2>Mi información</h2>

                <ul className="lista-profile">
                    <li>Nombre de Usuario: </li>
                    <li>Correo electronico de Usuario: </li>
                    <li>Dirección de Usuario: </li>
                </ul>
                
                
                <button className="boton-comprar" onClick={() => mostrar("cambiar-clave")}>Mas opciones</button>
                <div id="cambiar-clave">
                    <h2>Cambiar contraseña</h2>
                    <form className="formulario-perfil">
                        <fieldset className="fieldset-formulario">
                            <label className="etiquetas-formulario">Contraseña Actual:</label>
                            <input type="password" placeholder="Contraseña Actual"/>
                            <label className="etiquetas-formulario">Nueva Contraseña:</label>
                            <input type="password" placeholder="Nueva Contraseña"/>
                            <label className="etiquetas-formulario">Confirmar Contraseña:</label>
                            <input type="password" placeholder="Nueva Contraseña"/>
                            <button className="boton-comprar">Cambiar contraseña</button>
                        </fieldset>
                    </form>
                </div>
                
                
                
                
                

            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}