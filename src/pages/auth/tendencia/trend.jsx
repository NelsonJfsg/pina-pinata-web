import "./trendStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import { Cards } from  "../../../components/cards/cards";

export const Trend = () => {

    return(

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>
            <Cards/>
            <Footer/>
        </>
    )
}