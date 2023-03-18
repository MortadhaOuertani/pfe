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

`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

export const Nav = styled.nav`
  z-index: 5;
  background-color:white;
  position: absolute; 
  border: 2px solid  #e8e7f7;
  box-shadow: -3px -2px 4px 2px grey ;
  width: 90%;
  top: 5%;
  border-radius: 10px;
  left:5%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom:2px solid grey;
  @media screen and (max-width:1000px ) {
    display:none}
`

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

