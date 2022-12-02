
import { CredentialSignUp } from "../../../components/credentialForm/credential-signup-form/credentialSignUp";
import "./registerStyle.css";
import { Footer } from "../../../components/footer/footer";
import { Nav } from "../../../components/header/nav/nav";

export const Register = () => {

    return(
        
        <>
        
        <header className='header-nav'>
            <Nav/>
        </header>

        <div className="container">
            <CredentialSignUp/>
        </div>

        <div>
            <Footer/>
        </div>
        
        
        </>
        
    );

}