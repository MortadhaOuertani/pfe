import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
   color: #29aacd;
  }

`

export const Nav = styled.nav`
  box-shadow: 0px 1px 2px 1px #afbdbd;
  background: white;
  position: relative; 
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border: none;

`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10%;
`
export const Image = styled.img`
   height: 210%;
   width: auto;
   margin-left: 70%;
   margin-bottom: 0px;
`