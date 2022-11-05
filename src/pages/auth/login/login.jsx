import "./loginStyle.css";
import { CredentialForm } from "../../../components/credentialForm/credentialForm";



export const Login = () => {
    return (

        <>
            <div className="container">
                <CredentialForm buttonText = "Login"/>
            </div>
        </>


    );
}