import "./profileStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import "../../../components/cards/cardsStyle.css";


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
                    <form>
                        <fieldset>
                            <legend>Datos para cambiar contraseña</legend>

                            <label>Contraseña Actual:</label>
                            <label>Nueva Contraseña:</label>
                            <label>Confirmar Contraseña:</label>
                        </fieldset>
                    </form>
                </div>
                
                
                
                
                

            </div>
            <div className="perfil-footer">
                <Footer/>
            </div>
        </>
    );
}