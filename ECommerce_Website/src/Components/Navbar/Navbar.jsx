import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
       <nav className='main-section'>
          <div className='home-product'>
            <Link to="/">Home</Link>
            <Link to="/allproducts">Products</Link>
           </div>
           <div className='search-field'>
            <input className='search-input' type="text" placeholder='Products is here'/>
            <button>  <i class="fa-brands fa-searchengin"></i></button>
           </div>
           <ul className='user-info'>
             <li><Link to="/signin"> SignIn</Link></li>
             <li><Link to="/signout"> SignOUT</Link></li>
             <li><Link to="/cart">Cart(0)</Link></li>
             </ul>
             </nav>
          
  )
}

export default Navbar
