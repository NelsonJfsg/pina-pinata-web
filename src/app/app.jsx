
//Pages
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { Home } from '../pages/home/home';
import { Home2 } from '../pages/auth/home2/home2';
import { Profile } from '../pages/auth/profile/profile';
import { Trend } from '../pages/auth/tendencia/trend';

//Router
import { Link, Route, Routes } from 'react-router-dom';

//Style
import Normalize from 'react-normalize';
import "./appStyle.css"


export const App = () => {

    return (

        <>
            <Normalize/> 
            
            
                <div className='content'>

                <Routes>
                    <Route path='/' element={<Home  />} />
                    <Route path='/login' element={<Login />} />              
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/home2' element={<Home2 />} />
                    <Route path='/tendencias' element={<Trend/>} />
                    

                </Routes>

            </div>
            


        </>


    );


}
