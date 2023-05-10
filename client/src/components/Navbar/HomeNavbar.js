import React from 'react'
import { Button, ButtonR, Div, Div2, H2, Icon, Image, Img, ImgBorder, Nav, NavLink, NavLinkR, NavLinkz, NavMenu, Sandwich, SideBAR, SideDiv, SideIcon, SideNav, Span } from './HomeNavbarElements'
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Logout } from '../../redux/actions/authActions';
import store from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { H1 } from '../../pages/company/FormCompanyElements';
import { animateScroll } from 'react-scroll';
import { useSelector } from 'react-redux';

const HomeNavbar = ({ user }) => {

  const location = useLocation();
  const auth = useSelector(state => state.auth)
  const currentUrl = location.pathname;
  const [showSidebar, setShowSideBar] = useState(false);
  const [img, setImg] = useState(false);
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
    if (auth?.user?.logo) {
      fetchImg(auth);
    } else if (auth?.user?.profile) {
      fetchImgCandidat(auth);
    }
  }, [auth]);
  async function fetchImgCandidat(auth) {
    const { default: file } = await import(`../../ProfilePictures/${auth?.user?.profile}`);
    setImg(file);
  }
  async function fetchImg(auth) {
    const { default: file } = await import(`../../ProfilePictures/${auth?.user?.logo}`);
    setImg(file)
  }
  const ToggleSidebar = () => {
    setShowSideBar(!showSidebar);
  };
  const LogoutFunction = () => {
    store.dispatch(Logout())
  }

  return (
    <Nav>
      <SideBAR isOpen={showSidebar}>
        <SideIcon >
          <AiOutlineClose onClick={ToggleSidebar} style={{ color: 'white', fontSize: '40px', cursor: 'pointer' }} />
        </SideIcon>
        <SideDiv>
          <SideNav to='/offers' onClick={ToggleSidebar}>Offers</SideNav>
          <SideNav to='/' onClick={() => { currentUrl == "/" ? animateScroll.scrollTo(550) : animateScroll.scrollTo(2100); ToggleSidebar() }} >Register</SideNav>
          <SideNav to="/login" onClick={ToggleSidebar}>Login</SideNav>
          <SideNav to='/' onClick={() => { currentUrl == "/" ? animateScroll.scrollTo(8050) : animateScroll.scrollTo(8100); ToggleSidebar() }}>ContactUs</SideNav>
        </SideDiv>
      </SideBAR>
      <NavLinkz to='/'>

        {user.role === "ADMIN" ? "ADMIN" : ""}
        <Image src={logo} /><H2><Span>Hire</Span>Lab</H2>

      </NavLinkz>
      {user.role === "ADMIN" ? "" :
        <Div2>
          <NavLink to='/offers'>
            Offers
          </NavLink>
          <NavLink to="/" onClick={() => currentUrl == "/" ? animateScroll.scrollTo(8000) : animateScroll.scrollTo(9000)}>
            Contact Us
          </NavLink>
          </Div2>
      }
      <NavMenu>

        {user.isConnected ? <> <NavLink onClick={LogoutFunction} to='/'>
          Logout
        </NavLink>

          {auth.user.role === "USER" || auth.user.role === "COMPANY" ? (
            <NavLink to={`/Profile/${auth.user.id}`}>
              <ImgBorder>
                {auth.user.role === "USER" && <Img src={img} />}
                {auth.user.role === "COMPANY" && <Img src={img} />}
              </ImgBorder>
            </NavLink>
          ) : null}
        </>
          :
          <>
            <NavLink to='/login'>
              Login
            </NavLink>
            <NavLinkR to='/' onClick={() => currentUrl == "/" ? animateScroll.scrollTo(550) : animateScroll.scrollTo(2300)}>
              <ButtonR >
                Register
              </ButtonR>

            </NavLinkR>

          </>
        }
      </NavMenu>
      <Sandwich ><AiOutlineMenu onClick={ToggleSidebar} style={{ color: "white", fontSize: "40px", cursor: "pointer" }} /></Sandwich>

    </Nav>
  )
}

export default HomeNavbar
