import React, { useEffect, useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Image,
  Div,
  Div2,
  Icon,

} from './NavbarElements';
import logo from '../../images/logo.png';
import { Logout } from '../../redux/actions/authActions';
import store from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonFill } from "react-icons/bs";

const Navbar = ({ user }) => {
  const navigate = useNavigate()
  const SubmitForm = (e) => {
    e.preventDefault();
    if (typeUser == "candidate") {
      navigate('/formCandidate')
    }
    else if (typeUser == "company") {
      navigate('/formCompany')
    }
  }
  const [typeUser, setTypeUser] = useState("")
  const HandleChange = (e) => {
    setTypeUser(e.target.value)
  }
  useEffect(() => {
    console.log(user)
  }, [])

  const LogoutFunction = () => {
    store.dispatch(Logout())
  }
  return (
    <>
      <Nav>
        <Div>
          <NavLink to='/'>
            {user.role === "ADMIN" ? "ADMIN" : ""}
            <Image src={logo} />
          </NavLink>
          {user.role === "ADMIN" ? "" :
            <Div2>
              <Icon><BsPersonFill color="black" style={{ marginRight: "-10px" }} /><NavLink to='/formCandidate'>Candidate platform</NavLink></Icon>
              <Icon><CgWorkAlt color="black" style={{ marginRight: "-10px" }} /><NavLink to='/formCompany'>Company platform</NavLink></Icon>
            </Div2>
          }
        </Div>

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
    </>
  )
}

export default Navbar
