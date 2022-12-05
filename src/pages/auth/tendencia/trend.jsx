import "./trendStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";
import { CardsTrend } from "../../../components/cardsTrend/cardsTrend";

export const Trend = () => {

    return(

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>
            <CardsTrend/>
            <Footer/>
        </>
    )
}