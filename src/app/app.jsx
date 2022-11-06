import { Link, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { Nav } from "../components/header/nav/nav";
import Normalize from 'react-normalize';
import "./appStyle.css"
import { Home } from '../pages/home/home';

export const App = () => {

    return (

        <>
            <Normalize/> 
            
            <header className='header-nav'>
                <Nav/>
            </header>

            <div className='content'>

                <Routes>
                    <Route path='/home' element={<Home  />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

            </div>


        </>


    );


}
