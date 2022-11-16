import "./loginStyle.css";
import { CredentialForm } from "../../../components/credentialForm/credential-login-form/credentialForm";

const validation = () => {
    alert('Crdenciales incorrectas');
}


export const Login = () => {

    return (

        <>
            <div className="container">
                <CredentialForm buttonText = "Login"/>
            </div>
        </>

    );
}