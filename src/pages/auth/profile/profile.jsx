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
                    <form className="formulario-perfil">
                        <fieldset className="fieldset-formulario-clave">
                            <div>
                                <label className="etiquetas-formulario">Contraseña Actual:</label>
                                <input type="password" placeholder="Contraseña Actual"/>
                            </div>
                            <div>
                                <label className="etiquetas-formulario">Nueva Contraseña:</label>
                                <input type="password" placeholder="Nueva Contraseña"/>
                            </div>
                            <div>
                                <label className="etiquetas-formulario">Confirmar Contraseña:</label>
                                <input type="password" placeholder="Nueva Contraseña" className="altura"/>
                            </div>
                        </fieldset>
                        <button className="boton-comprar">Cambiar contraseña</button>
                    </form>

                    <h2>Ingresar Nuevo Usuario</h2>
                    <form className="formulario-perfil">
                        <fieldset className="fieldset-formulario">
                            <div>
                            <label className="etiquetas-formulario">Rol:</label>
                             <select className="select-formulario" name="Rol" id="Rol">
                                <option value="mercedes">Administrador</option>
                                <option value="audi">Cliente</option>
                            </select>
                            </div>
                            <div>
                                <label className="etiquetas-formulario">Nombre Usuario:</label>
                                <input type="text" placeholder="Nombre"/>
                            </div>
                            <div>
                                <label className="etiquetas-formulario">Apellido Paterno:</label>
                                <input type="text" placeholder="Apellido P"/>
                            </div>
                            <div>
                                <label className="etiquetas-formulario">Apellido Materno:</label>
                                <input type="text" placeholder="Apellido M"/>
                            </div>

                            <div>
                                <label className="etiquetas-formualrio">E-mail:</label>
                                <input type="email" placeholder="E-mail"/>
                            </div>
                            
                        </fieldset>
                        <button className="boton-comprar">Ingresar Nuevo Usuario</button>
                    </form>

                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}