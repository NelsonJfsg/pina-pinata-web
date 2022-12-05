import "../../components/cardsTrend/cardTrendStyle.css";

import Santa from "../../assets/images/santaClaus.jpg"
import Arbol from "../../assets/images/arbol.jpg"
import Burrito from "../../assets/images/burrito.jpg"
import Picos from "../../assets/images/7picos.jpg"
import Esfera from "../../assets/images/esfera.jpg"
import GalletaJengibre from "../../assets/images/galletaJengibre.jpg"
import Mono from "../../assets/images/mono.jpg"
import Reno from "../../assets/images/reno.jpg"
import Grinch from "../../assets/images/grinch.jpg"

export const CardsTrend = () => {

    return(

        <>
        
        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Santa}/>
                <h2>Piñata Santa Claus</h2>
                <h3>Precio: $200</h3>
                <p>Descripcion: Piñata de Santa Claus conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Arbol}/>
                <h2>Piñata Árbol Navideño </h2>
                <h3>Precio: $200</h3>
                <p>Descripcion: Piñata de árbol navideño conmemortiva a fechas decembrinas </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {Reno}/>
                <h2>Piñata Reno </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata de reno navideño conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Mono}/>
                <h2>Piñata Mono de Nieve </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata de mono de nieve conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Burrito}/>
                <h2>Piñata Burrito </h2>
                <h3>Precio: $200</h3>
                <p>Descripcion: Piñata de burrito sabanero conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {GalletaJengibre}/>
                <h2>Piñata Galleta Jengibre </h2>
                <h3>Precio: $200</h3>
                <p>Descripcion: Piñata de galleta de jengibre conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Grinch}/>
                <h2>Piñata Grinch $250</h2>
                <h3>Precio: Piñata de Grinch conmemortiva a fechas decembrinas</h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {Esfera}/>
                <h2>Piñata Esfera </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: Piñata de esfera navideña conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Picos}/>
                <h2>Piñata Noche Buena </h2>
                <h3>Precio: $450</h3>
                <p>Descripcion: Piñata de noche buena conmemortiva a fechas decembrinas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        </>

    );

}
