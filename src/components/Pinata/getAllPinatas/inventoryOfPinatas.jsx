import { React, useState, useEffect } from "react";
import Axios  from "axios";

import "../../../components/Pinata/getAllPinatas/inventoryOfPinatasStyle.css";
import { Button } from "@mui/material";


export const InventoryOfPinatas = () => {
    
    const url = 'http://localhost:3000/product/pinata/get-all'; 
    const imageRoot = "https://drive.google.com/uc?export=view&id=";
    
    const [pinatas, setPinatas] = useState([]);


    useEffect(() => {
        getPinatas();
    }, []);


    const getPinatas = async () => {

        let res = await Axios.get(url);
        console.log(res.data[0]);
        setPinatas(res.data);

    }



    /*
    
    fetch(url)

        .then((response) => {
           return response.json();
        })
        .then((data) => {
            console.log(data)
            console.log('estado')
            //const dato = JSON.stringify(data)
        
            data.map(function(author) {
                setPinatas([...pinatas, author]);
            
          });
        })
        console.log(pinatas) 
    */

    //Variables

    return(
        
        <>

                <div className="cards">
                    {pinatas.map( pinata => (
                        <div className="card">
                            
                            <h2   key={pinata.id}>{pinata.name}</h2>
                            <img  className="image" src={`${imageRoot}${pinata.image}`}/>
                            <p >{pinata.description}</p>
                            <p >{pinata.price}</p>
                            
                            <Button onClick={() => {}} variant = 'contained'> Editar</Button>
                            <Button onClick={() => {}} variant = 'contained'> Eliminar</Button>

                        </div>
                        
                    ))}
            
                </div>

                <div className="Menu">

                </div>
                
        </>
        );
    
    

}