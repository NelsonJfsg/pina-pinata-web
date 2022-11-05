import { Link, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/register';
import { Nav } from "../components/header/nav/nav";
import Normalize from 'react-normalize';
import "./appStyle.css"

//pages

export const App = () => {

    return (

        <>
            <Normalize/> 
            
            <header className='header-nav'>
                <Nav/>
            </header>

            <div className='content'>

                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

            </div>


        </>


    );


}