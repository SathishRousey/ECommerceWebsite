import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css'
import Clothing from './Components/Clothing';
import Electronics from './Components/Electronics';
import AllProducts from './Components/AllProducts';
import HomeApplication from './Components/HomeApplication';
import Accessories from './Components/Accessories';
const App = () => {
    return (
        <div className='main-section'>

        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/allproducts">Products</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allproducts" element={<AllProducts/>}/>
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/clothing" element={<Clothing />} />
                <Route path='/homeApplication' element={<HomeApplication/>}/>
                <Route path='/accessories' element={<Accessories/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;
