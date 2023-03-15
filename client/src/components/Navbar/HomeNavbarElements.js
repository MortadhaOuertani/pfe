import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: white;
  font-weight: 600;
  display: flex;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    color: #42CCA6;
  }

`;
export const NavLinkz = styled(Link)`
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
 

`;
export const Span = styled.span`
  color: white ; 
  font-size: 22px;
`;

export const H2 = styled.h2`
  color: #42CCA6 ; 

`;
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover{
       color: #42CCA6;

  }
`;

export const Nav = styled.nav`
  z-index: 5;
  background-color:rgba(0,0,0);
  position: absolute; 
  border: 2px solid  #e8e7f7;
  width: 100%;
  top:0;
  right: 0;
  left: 0;
  height: 90px;
  display: flex;
  justify-content: space-between;
  border: none;

`
export const Button = styled.button`
  padding: 20px 40px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.05s ease-in-out;
    box-shadow: 0px 0px 8px 2px white;  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10%;
`
export const Image = styled.img`
   height: 100%;
   width: auto;
   margin-left: 70%;
   margin-top: 10px;
`;
export const BtnRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-right: 10px;
`;

export const Inputcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 40px;

`;
export const InputRadio = styled.input`
  margin-left: 30px;
  border-bottom: 1px solid grey ;
`;
export const Label = styled.label`
text-align: center;
margin-left: 10px;
`;
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const Div = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  column-gap: 100px;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  column-gap: 20px;

`;

