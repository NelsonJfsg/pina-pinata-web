
import "./home2Style.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import { Cards } from "../../../components/cards/cards";

import { InventoryOfPinatas } from "../../../components/Pinata/getAllPinatas/inventoryOfPinatas";

export const Home2 = () => {


    return (

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>
            <InventoryOfPinatas/>
            <Footer/>
        </>
    );
}