import "./inventarioStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import { Cards } from "../../../components/cards/cards";

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
                            <h3>Inventario Actual</h3>
                        </button>
                        <button className="boton-inventario" onClick={() => mostrarinventario("agregarpiñata")}>
                            <h3>Agregar Nueva Piñata</h3>
                        </button>
                    </div>
                    <div className="inventario-card">
                        <div id="inventarioactual">
                            <h1><center>Inventario Actual</center></h1>
                            <Cards/>
                        </div>
                        <div id="agregarpiñata">
                            <h1>Agregar Piñata</h1>
                        </div>
                    </div>
                </div>
            </div>


         
                 <Footer/>
         

        </>
    );
}