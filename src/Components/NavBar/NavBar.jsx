import React from 'react'
import{ Navbar , Nav  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'
const NavBar = () => {
  return (
    <>
      
      <Navbar expand="lg">
        <div >
        <Navbar.Brand href="#home" className='logo'>Gericht</Navbar.Brand></div>
        <div className='nav_middle'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks justify-content-end  ">
            <HashLink className='a' to="/#home">Home</HashLink>
            <HashLink className='a' to="/#About">About</HashLink>
            <HashLink className='a' to="/#Menu">Menu</HashLink>
            <HashLink className='a' to="/#Awards">Awards</HashLink>
            <HashLink className='a' to="/#Contact">Contact</HashLink>
            <div className='nav_left'>
            <HashLink className='a2' to="/#Log">Log In / Registration</HashLink>
            <HashLink className='a2' to="/#Log">Book Table</HashLink>
          </div>
          </Nav>
        </Navbar.Collapse></div>

    </Navbar>
    </>
  )
}

export default NavBar