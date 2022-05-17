import React from 'react';
import logo from '../images/logo1.png';

function Navbar() {
    return (
        <nav>
            <a className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn' />
            <ul className='menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Agents</a></li>
                <li><a href='#'>Property</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <a href='#' className='property'>Property</a>
        </nav>
    )
}

export default Navbar;