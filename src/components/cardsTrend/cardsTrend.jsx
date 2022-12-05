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
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Arbol}/>
                <h2>Piñata Árbol Navideño </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {Reno}/>
                <h2>Piñata Reno </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Mono}/>
                <h2>Piñata Mono de Nieve </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Burrito}/>
                <h2>Piñata Burrito </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {GalletaJengibre}/>
                <h2>Piñata Galleta Jengibre </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Grinch}/>
                <h2>Piñata Grinch </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
            <img className="image" src= {Esfera}/>
                <h2>Piñata Esfera </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Picos}/>
                <h2>Piñata Noche Buena </h2>
                <h3>Precio: </h3>
                <p>Descripcion: </p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        </>

    );

}
