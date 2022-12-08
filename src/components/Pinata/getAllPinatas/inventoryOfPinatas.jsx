import { React, useState, useEffect } from "react";

export const InventoryOfPinatas = () => {

    const [pinatas, setPinatas] = useState([]);

    const getPinatas = async () => {
        const newPinatas = await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
          authors.map(function(author) {
            
          });
        })
        setPinatas(newPinatas);
        console.log(pinatas)
    }


    //Variables
    const url = 'http://localhost:3000/product/pinata/get-all'; 

    return(
        
        <>
            <h1>{}</h1>
            <ol>
                {
                    
                    pinatas.map( pinata => (
                        
                        <li key={pinata.id}>{pinata.name}</li>
                    ))
                    
                }
            </ol>
        
        </>

        );
    
    

}