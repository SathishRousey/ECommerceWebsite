import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Home = () => {
    return (
        <div className='home-page'>

          <marquee direction=" to right"><h1 id='page-heading'>Welcome to Our E-Commerce Store!</h1></marquee>  
            <ul>
                <li><Link to="/electronics">Electronics </Link></li>
                <li><Link to="/clothing">Clothing </Link></li>
                <li><Link to="/homeApplication">Home Application </Link></li>
                <li><Link to="/accessories">Accessories </Link></li>
            </ul>
        </div>
        
        

    );

};

export default Home;
