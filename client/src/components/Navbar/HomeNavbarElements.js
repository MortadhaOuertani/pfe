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
  `
export const Img = styled.img`
  width:65px;
  height: 65px;
  object-fit:cover;
object-position:center;
border-radius: 50%;
z-index: 1;

  `
export const NavLinkR = styled(Link)`
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
  font-size: 25px;
  margin-right: 2px;
`;

export const H2 = styled.h2`
  color:white ; 
margin-left: 2px;
font-size: 20px;
`;
export const ImgBorder = styled.div`
  border-radius: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  background-color: white;
  border:2px solid blue;
  &:hover{
    border: 2px solid rgb(59,191,226) ;
  }
  &:before{
  content:"";
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  width: 65px;
  height: 65px;
  background-color: black;
  z-index: 2;
}
`
export const SideBAR = styled.div`
  position: absolute;
  width: 100%;
  margin: 0;
  height: 100vh;
  top: ${props => props.isOpen ? '0' : '-100vh'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;

`;
export const SideDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SideIcon = styled.div`
 width: 100%;
 align-items: flex-end;
 margin-right: 40px;
 padding-top: 10px;
 justify-content: end;
 display: flex;
`
export const SideNav = styled(Link)`
  color: white;
  font-weight: 600;
  display: flex;
  font-size: 40px;
  text-decoration: none;
  padding: 0 1rem;
  margin-top: 30px;
  cursor: pointer;
  &:hover{
    color: #42CCA6;
  }
  `
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover{
       color: #42CCA6;

  }
`;
export const Nav = styled.nav`
  z-index: 1111111111;
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
  padding: 10px 30px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.05s ease-in-out;
    box-shadow: 0px 0px 8px 2px white;  }
`;
export const ButtonR = styled.button`
  padding: 10px 30px;
  background-color: transparent;
  color: white;
  font-weight:bolder;
  border-radius: 2px;
  border: 2px solid white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    transition: all 0.05s ease-in-out;
    box-shadow: 0px 0px 8px 2px white;  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width:768px ) {
    display:none
    }
`
export const Sandwich = styled.div`
display:none;
width: auto;
cursor: pointer;

@media screen and (max-width:768px ) {
    display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

    }
`
export const Image = styled.img`
   height: 40%;
   width: auto;
   margin-left: 70%;
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
  background-color: red;
  width: 100%;
  column-gap: 100px;
`;
export const Div4 = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  column-gap: 20px;
  @media screen and (max-width:768px ) {
    display:none
    }
`;

