import "./inventarioStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";

export const Inventario = () => {

    return (

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>

            <div className="contenedor">
                <div className="contenido-inventario cuadro-inventario">
                    <div className="menu-inventario">
                        <button className="boton-inventario" onClick={() => mostrarinventario("inventarioactual")}>
                            <h3>Inventario actual</h3>
                        </button>
                        <button className="boton-inventario" onClick={() => mostrarinventario("agregarpiñata")}>
                            <h3>Agregar nueva piñata</h3>
                        </button>
                        <button className="boton-inventario" onClick={() => mostrarinventario("eliminarpiñata")}>
                            <h3>Eliminar piñata</h3>    
                        </button>
                        <button className="boton-inventario" onClick={() => mostrarinventario("modificarpiñata")}>
                            <h3>Modificar piñata</h3>
                        </button>
                    </div>
                    <div className="inventario-card">
                        <div id="inventarioactual">
                            <h1>inventario actual</h1>
                        </div>
                        <div id="agregarpiñata">
                            <h1>agregar piñata</h1>
                        </div>
                        <div id="eliminarpiñata">
                            <h1>eliminar piñata</h1>
                        </div>
                        <div id="modificarpiñata">
                            <h1>modificar piñata</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="perfil-footer">
                 <Footer/>
            </div>

        </>
    );
}