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
                    
                </div>
                
                
                
                
                

            </div>
            <div className="perfil-footer">
                <Footer/>
            </div>
        </>
    );
}