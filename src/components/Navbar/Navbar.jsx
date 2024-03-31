// Header.js
import React from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [openMenu, setOpenMenu ] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">

          <img className="logo" src="/Assets/RS logo.png" alt="" />
       
        <ul>
          <li>
          <a className="menu-item">Home</a>
          </li>
          <li>
            <a className="menu-item">Skills</a>
          </li>
          <li>
          <a className="menu-item">Work Experience</a>
          </li>
          <li>
          <a className="menu-item">Contact Me</a>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>

        <button class="menu-btn" onClick={toggleMenu}>
          <span
          class={"material-symbols-outlined"}
          style={{ fontSize: "1.8rem"}}>
            {openMenu ? <FontAwesomeIcon icon={faClose} />
  :            <FontAwesomeIcon icon={faBars} />
}
        
           

</span> 
        </button>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
