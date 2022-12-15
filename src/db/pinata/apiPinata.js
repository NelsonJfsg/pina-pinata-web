import { useIsFocusVisible } from "@mui/material";
import Axios from "axios";


export const createPinata = (title, description, price, imageUrl) => {


    const url = 'http://localhost:3000/product/pinata/create-pinata';
    
    //Json empty
    var pinata = {}
        
            //Fill json
            pinata.name = title;
            pinata.description = description;
            pinata.price = parseFloat(price);
            pinata.image = imageUrl;

            if(pinata.price <= 0){
                alert("Carnal la piñata esta muy bara");
            }else{


            //Petition.
            Axios.post(url, pinata)
                .then(response => {
                    if(response.data.identifiers[0].id){
                        alert("Piñata creada.");
                        location.reload();
                    }
                }).catch(err => {


                    console.log("array length" + err.response.data.message.length);
                    console.log("array length" + err.response.data.message[0]);
    
                    for(var i = 0; i < err.response.data.message.length; i++){
    
                        switch (err.response.data.message[i]) {
                            case "email must be an email":
                                alert("El correo electronico no es valido.");
                                break;
                            case "name must contain only letters (a-zA-Z)":
                                alert("El nombre debe de contener nomas letras alv");
                                break;
                            case "middleName must contain only letters (a-zA-Z)":
                                alert("Apellido materno debe de contener solo letras.");
                                break;
                            case "lastName must contain only letters (a-zA-Z)":
                                alert("Apellido paterno debe de contener solo letras.");
                                break;
                                
                        }
                    }

                }); 

            }

}

export const deletePinata = () => {

}


