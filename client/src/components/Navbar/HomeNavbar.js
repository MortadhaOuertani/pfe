import React from 'react'
import { Button, ButtonR, Div, Div2, H2, Icon, Image, Nav, NavLink, NavLinkR, NavLinkz, NavMenu, Sandwich, Span } from './HomeNavbarElements'
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Logout } from '../../redux/actions/authActions';
import store from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from 'react-icons/ai';
import { H1 } from '../../pages/company/FormCompanyElements';

const HomeNavbar = ({ user }) => {
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
    <Nav>
        <NavLinkz to='/'>
          {user.role === "ADMIN" ? "ADMIN" : ""}
          <Image src={logo}/><H2><Span>Hire</Span>Lab</H2>

        </NavLinkz>
        {user.role === "ADMIN" ? "" :
          <Div2>
            <NavLink to='/offers'>
              Offers
            </NavLink>
            <NavLink to='/'>
              Contact Us
            </NavLink>
            {/*
            <Icon><BsPersonFill color="white" style={{ marginRight: "-10px" }} /><NavLink to='/formCandidate'>Candidate platform</NavLink></Icon>
            <Icon><CgWorkAlt color="white" style={{ marginRight: "-10px" }} /><NavLink to='/formCompany'>Company platform</NavLink></Icon>
          */}</Div2>
        }
      <NavMenu>

        {user.isConnected ? <NavLink onClick={LogoutFunction} to='/'>
          Logout
        </NavLink> :
          <>
            <NavLink to='/login'>
              Login
            </NavLink>
            <NavLinkR to='/'>
              <ButtonR>
                Register
              </ButtonR>
            </NavLinkR>
          </>
        }
      </NavMenu>
      <Sandwich><AiOutlineMenu style={{color:"white",fontSize:"40px",cursor:"pointer"}}/></Sandwich>

    </Nav>
  )
}

export default HomeNavbar
