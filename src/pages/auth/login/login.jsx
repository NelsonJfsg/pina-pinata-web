import "./loginStyle.css";
import { CredentialForm } from "../../../components/credentialForm/credential-login-form/credentialForm";

export const Login = () => {

    return (

        <>
            <div className="container">
                <CredentialForm buttonText = "Login"/>
            </div>
        </>


    );
}