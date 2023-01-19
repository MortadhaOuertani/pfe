import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: white;
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
  z-index: 5;
  background-color:rgba(0,0,0,0.2);
  position: absolute; 
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
   height: 170%;
   width: auto;
   margin-left: 70%;
   margin-top: 10px;
`