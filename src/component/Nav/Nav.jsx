import React, { useState } from 'react';
import Navstyles from './Nav.module.css'; 
import logo from "../../assets/logo.png"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={Navstyles.navContainer}>
            <div>
              
             <img src={logo}/>
            </div>
          
            <ul className={`${Navstyles.navList} ${isOpen ? Navstyles.show : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skils">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className={Navstyles.hamburger} onClick={toggleMenu}>
                        {isOpen? "=" : "☰"}
                    </button>
        </nav>
    );
}

export default Nav;
