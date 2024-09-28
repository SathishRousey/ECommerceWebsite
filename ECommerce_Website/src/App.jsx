import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css'
import Clothing from './Components/Clothing';
import Electronics from './Components/Electronics';
import AllProducts from './Components/AllProducts';
import HomeApplication from './Components/HomeApplication';
import Accessories from './Components/Accessories';
import SingleProducts from './Components/SingleProducts';
import SignIn from './Components/UserInformation/SignIn';
import SignOut from './Components/UserInformation/SignOut';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
    return (
        <div >

        <BrowserRouter>
        <Navbar/>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allproducts" element={<AllProducts/>}/>
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/clothing" element={<Clothing />} />
                <Route path='/homeApplication' element={<HomeApplication/>}/>
                <Route path='/accessories' element={<Accessories/>}/>
                <Route path='/singleProduct/:id' element={<SingleProducts/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signout' element={<SignOut/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;
