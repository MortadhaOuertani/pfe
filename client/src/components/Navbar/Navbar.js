import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Image
} from './NavbarElements';
import logo from '../../images/logo.png';


const Navbar = ({user}) => {
  return (
    <Nav>
<<<<<<< HEAD
      <NavLink to='/' >
=======
      <NavLink>
       {user.role === "ADMIN"?"ADMIN":""}
>>>>>>> 584e09d840f4f6bb64970885e51fb5affcd03243
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
