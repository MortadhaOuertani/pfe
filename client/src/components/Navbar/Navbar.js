import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Image
} from './NavbarElements';
import logo from '../../images/logo.png';


const Navbar = () => {
  return (
    <Nav>
      <NavLink>
        <Image src={logo} />
      </NavLink>
      <NavMenu>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to ='/register'>
          Register
        </NavLink>
        <NavLink to='/login'>
          Login
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
