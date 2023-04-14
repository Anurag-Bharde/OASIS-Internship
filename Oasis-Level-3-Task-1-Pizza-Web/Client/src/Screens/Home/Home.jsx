
import React , { useState, useEffect }  from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import allpizza from '../../pizaa-data';

import  Pizza  from '../../Components/Pizza/Pizza';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Menu from  '../Menu/Menu'
import Cart from '../cart/Cart';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';


const Home = () => {
  return (
    <Router>
    <Navbar/>
        <div className="main-container">
            
            
            
        <Routes>
            

            <Route path='/' element={<About/>} />
           
            <Route path='/Menu' element={<Menu/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Registration' element={<Registration/>} />

        </Routes>
        </div>
    </Router>
  );
};

export default Home