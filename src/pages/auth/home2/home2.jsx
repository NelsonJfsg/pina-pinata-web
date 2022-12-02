
import "./home2Style.css";
import { Footer } from "../../../components/footer/footer";
import { Nav2 } from "../../../components/header2/nav2";

export const Home2 = () => {

    return (

        <>
            <header className='header-nav'>
                <Nav2/>
            </header>
            <div className="container">
                <h1>Hola</h1>
            </div>
                <Footer/>
        </>
    );
}