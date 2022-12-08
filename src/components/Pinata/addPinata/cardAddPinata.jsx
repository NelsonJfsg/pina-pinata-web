import { Button, Input, TextField } from "@mui/material";

import "./cardAddPinataStyle.css";

import { React, useState, useEffect } from "react";

import { createPinata } from "../../../db/pinata/apiPinata";

export const CardAddPinata = () => {

    //Vars
    var title;
    var description;
    var price;
    var image;

    const handleChangeOfTitle = (event) => {
        title = event.target.value;
    }

    const handleChangeDescription = (event) => {
        description = event.target.value;
    }

    const handleChangePrice = (event) => {
        price = event.target.value;
    }

    const handleChangeImage = (event) => {
        image = event.target.value;
    }

    const root = "https://drive.google.com/uc?export=view&id=";
    const imageLion = "1RtMUENySEbr5vHAuPP2wNfcu7GRrY2Pm";


    return(
        <>
            <div className="card-container">


                <div className="title-container">
                    <h2>Agregar piñata</h2>
                </div>

                <div className="form-container">

                    <img className="image" src={`${root}${imageLion}`}/>
                    
                    <TextField 
                        className="text-field" 
                        id="title" 
                        label="Nombre de la piñata" 
                        variant="outlined"
                        value={title}
                        onChange={handleChangeOfTitle}    
                    />

                    <TextField 
                        className="text-field" 
                        id="description" 
                        label="Descripcion de la piñata" 
                        variant="outlined"
                        value={description}
                        onChange={handleChangeDescription}
                    />

                    <TextField 
                        className="text-field" 
                        id="price" 
                        label="Precio" 
                        variant="outlined"    
                        value={price}
                        onChange={handleChangePrice}
                    />

                    <TextField 
                        className="text-field" 
                        id="imageLink" 
                        label="image" 
                        variant="outlined"
                        value={image}
                        onChange={handleChangeImage}
                    />

                </div>

                <div className="menu-container">
                    <Button onClick={() => createPinata(title, description, price, image)} variant="contained">Agregar piñata</Button>
                </div>
            </div>


        </>
    );

}