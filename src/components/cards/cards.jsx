import "./cardsStyle.css";

import Venom from "../../assets/images/venom.jpg"
import Tiktok from "../../assets/images/tiktok.jpg"
import Boss from "../../assets/images/babyboss.jpg"
import Batman from "../../assets/images/batman.jpg"
import Bunny from "../../assets/images/bunny.jpg"
import Caffenio from "../../assets/images/caffenio.jpg"
import Chile from "../../assets/images/chile.jpg"
import Evee from "../../assets/images/evee.jpg"
import HarryP from "../../assets/images/harryP.jpg"
import Naranjeros from "../../assets/images/naranjeros.jpg"
import Steve from "../../assets/images/steve.jpg"
import Taco from "../../assets/images/taco.jpg"


export const Cards = () => {

    return(

        <>
        
        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Venom}/>
                <h2>Piñata Venom </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: Piñata del supervillano de Marvel, Venom</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Tiktok}/>
                <h2>Piñata TikTok </h2>
                <h3>Precio: $400</h3>
                <p>Descripcion: Piñata de la red social más usada del momento</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Boss}/>
                <h2>Piñata Baby Boss </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata del jefe más pequeño y poderoso de todo el cine</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Batman}/>
                <h2>Piñata Batman </h2>
                <h3>Precio: $350</h3>
                <p>Descripcion: Piñata del caballero de la noche y guardián de Ciudad Gótica</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Bunny}/>
                <h2>Piñata Buggs Bunny </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata del personaje icónico de los Looney Tunes</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Caffenio}/>
                <h2>Piñata Caffenio </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: Piñata de vaso del mejor café de la zona</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>

        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Chile}/>
                <h2>Piñata Chile </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata de chile piquín para fiestas mexicanas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Evee}/>
                <h2>Piñata Evee </h2>
                <h3>Precio: $250</h3>
                <p>Descripcion: Piñata del pokemon con más evoluciones</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {HarryP}/>
                <h2>Piñata Harry Potter </h2>
                <h3>Precio: $350</h3>
                <p>Descripcion: Piñata del mago más poderoso de todo Hogwarts</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>
        <div className="tarjetas">
            <div className="item">
                <img className="image" src= {Naranjeros}/>
                <h2>Piñata Naranjeros </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: Piñata del equipo de besibol representativo de Hermosillo</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Steve}/>
                <h2>Piñata Steve </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: Piñata del personaje del juego más famoso de la época</p>
                <button className="boton-comprar">Comprar</button>
            </div>
            <div className="item">
                <img className="image" src= {Taco}/>
                <h2>Piñata Taco </h2>
                <h3>Precio: $300</h3>
                <p>Descripcion: piñata de taco con ojos y bigote para fiestas</p>
                <button className="boton-comprar">Comprar</button>
            </div>
        </div>
        </>

    );

}
