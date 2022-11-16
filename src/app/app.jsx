
//Pages
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { Test } from '../pages/auth/rtest/rtest';
import { Nav } from "../components/header/nav/nav";
import { Home } from '../pages/home/home';

//Router
import { Link, Route, Routes } from 'react-router-dom';

//Style
import Normalize from 'react-normalize';
import "./appStyle.css"

export const App = () => {

    return (

        <>
            <Normalize/> 
            
            <header className='header-nav'>
                <Nav/>
            </header>

            <div className='content'>

                <Routes>
                    {/**
                     * 
                     * 
                    <Route path='/home' element={<Home  />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/test' element={<Test />} />
                     */}
                    
                    <Route path='/register' element={<Register />} />
                </Routes>

            </div>


        </>


    );


}
