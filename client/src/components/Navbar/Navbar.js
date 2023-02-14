import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Image
} from './NavbarElements';
import logo from '../../images/logo.png';
import { Logout } from '../../redux/actions/authActions';
import store from '../../redux/store';


const Navbar = ({ user }) => {

  const LogoutFunction = () => {
    store.dispatch(Logout())
  }
  return (
    <Nav>
      <NavLink to='/'>
        {user.role === "ADMIN" ? "ADMIN" : ""}
        <Image src={logo} />
      </NavLink>
      <NavMenu>
        <NavLink to='/'>
          Home
        </NavLink>
        {user.isConnected ? <NavLink onClick={LogoutFunction} to='/'>
          Logout
        </NavLink> : <> <NavLink to='/register'>
          Register
        </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
        </>
        }
      </NavMenu>
    </Nav>
  )
}

export default Navbar
