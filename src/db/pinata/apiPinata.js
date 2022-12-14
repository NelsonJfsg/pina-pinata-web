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

        
            //Petition.
            Axios.post(url, pinata)
                .then(response => {
                    if(response.data.identifiers[0].id){
                        alert("Piñata creada.");
                        location.reload();
                    }
                }).catch(err => {
                        console.log();
                        alert(err.response.data.message);
                }); 
}

export const deletePinata = () => {

}


