import React from 'react';
import './titleStyle.css';


export const Title = ({ text }) => {

    return(

        <>
            <div className='title-container'>
                <label className='title-label'> {text}  </label>
            </div>


        </>

    )


};