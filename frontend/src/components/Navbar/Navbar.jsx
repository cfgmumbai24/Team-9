import React from 'react';
import './Navbar.css';
import Logo from '../../assets/ngologo.png'; 
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
       
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

