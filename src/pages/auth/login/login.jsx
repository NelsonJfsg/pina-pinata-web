import "./loginStyle.css";
import { CredentialForm } from "../../../components/credentialForm/credential-login-form/credentialForm";
import { Footer } from "../../../components/footer/footer";
import { Nav } from "../../../components/header/nav/nav";

const validation = () => {
    alert('Crdenciales incorrectas');
}


export const Login = () => {

    return (

        <>
            <header className='header-nav'>
                <Nav/>
            </header>

            <div className="container">
                <CredentialForm buttonText = "Login"/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}