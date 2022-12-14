import "./inventarioStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import { Cards } from "../../../components/cards/cards";
import { CardAddPinata } from "../../../components/Pinata/addPinata/cardAddPinata";
import { InventoryOfPinatas } from "../../../components/Pinata/getAllPinatas/inventoryOfPinatas";

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
                        <button className="boton-inventario" onClick={() => agregarpin("agregarpiñata")}>
                            <h3>Agregar Nueva Piñata</h3>
                        </button>
                    </div>
                    <div className="inventario-card">
                        <div id="inventarioactual">
                            <h1><center>Inventario Actual</center></h1>
                            <InventoryOfPinatas/>
                        </div>
                        <div id="agregarpiñata">
                            <CardAddPinata/>
                        </div>
                    </div>
                </div>
            </div>


         
                 <Footer/>
         

        </>
    );
}