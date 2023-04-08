import { Link } from "react-router-dom";
import styled from "styled-components";
import image from '../../images/card.png'

export const Container = styled.div`
display: flex;
flex-direction: row;
height:290px;
min-width:500px;
background-color: white;
border-radius: 10px;
box-shadow: 0px 0px 5px 0.5px black;
background-image: url(${image});
background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
export const Left = styled.div`
width:auto;
height:50%;
display: flex;
align-self: center;
margin-left: 50px;
margin-top: 40px;
`
export const Right = styled.div`
width:100%;
height:90%;
padding-top: 20px;
display: flex;
flex-direction: column;
text-align: center;

`

export const LinkS = styled(Link)`
text-decoration: none;
color: inherit;
width: 100%;
height:40%;
display: flex;

`
export const P = styled.p`
flex-grow: 1;
align-self: flex-start;
`
export const Lowerside = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 60%;
  flex-direction: column;
  
`
export const Button = styled.button`
width: 20%;
height: 50%;
border-radius: 5px;
background-color: #198754;
color: white;
border:none;
font-weight:700 ;
&:hover{
cursor: pointer;
background-color: rgb(25,155,84);

}
`
export const ButtonRed = styled.button`
width: 20%;
height: 50%;
border-radius: 5px;
background-color: rgb(220,53,69);
color: white;
border:none;
font-weight:700 ;
&:hover{

background-color: rgb(236,53,69);
cursor: pointer;
}`
export const Footer = styled.div`
height: 10%;
width: 100%;
border-radius: 10px;
align-self: flex-end;
display: flex;
padding-bottom: 10px;
column-gap: 30px;
flex-direction: row;
align-items: flex-end;
justify-content: center;
flex-grow: 1;

`


export const Img = styled.img`
width:140px;
height:auto;
border-radius:50% ;
display: flex;
flex-direction: center;
object-fit:cover;
object-position:center;
`
export const Information = styled.div`
padding-top: 90px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
row-gap: 5px;
height:40%;
`
export const FullName = styled.div`
height:20%;
position: relative;
top:20%;
right:20%;

`

export const Header = styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
export const H4 = styled.h3`
`
export const H = styled.h2`
`
export const Icons = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 0;
align-items: flex-end;
justify-content:flex-end;
`
export const H3 = styled.h4`
text-align: center;
margin-left:10%;

`