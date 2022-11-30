import "./loginStyle.css";
import { CredentialForm } from "../../../components/credentialForm/credential-login-form/credentialForm";
import { Footer } from "../../../components/footer/footer";

const validation = () => {
    alert('Crdenciales incorrectas');
}


export const Login = () => {

    return (

        <>
            <div className="container">
                <CredentialForm buttonText = "Login"/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}