import { Footer } from "../../components/footer/footer";
import { Nav } from "../../components/header/nav/nav";
import { Cards } from "../../components/cards/cards";

export const Home = () => {

    return(

    <>
            <header className='header-nav'>
                <Nav/>
            </header>
        <Cards/>
        <div>
            <Footer/>
        </div>
    </>

    );

}