import React, { useState } from 'react';
import Navstyles from './Nav.module.css'; 

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={Navstyles.navContainer}>
            <div>
              
             
            </div>
          
            <ul className={`${Navstyles.navList} ${isOpen ? Navstyles.show : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <button className={Navstyles.hamburger} onClick={toggleMenu}>
                        {isOpen? "=" : "☰"}
                    </button>
        </nav>
    );
}

export default Nav;
