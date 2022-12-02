import { Footer } from "../../components/footer/footer";
import { Nav } from "../../components/header/nav/nav";

export const Home = () => {

    return(

    <>
            <header className='header-nav'>
                <Nav/>
            </header>
        <div className="lateral-container">
            <h1>side</h1>
        </div>

        <div>
            <h1>main container</h1>
        </div>
        <div>
            <Footer/>
        </div>
    </>

    );

}