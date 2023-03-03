import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
height:280px;
width:30%;
background-color: white;
border-radius: 10px;
box-shadow: 0px 0px 5px 0.5px black;
`
export const Left = styled.div`
width:auto;
height:100%;
display: flex;
`
export const Right = styled.div`
width:100%;
height:100%;
padding-top: 20px;
display: flex;
flex-direction: column;
text-align: center;

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
width:auto;
height:100%;
border-radius:5px ;
`
export const Information = styled.div`
padding-bottom: 30px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
row-gap: 5px;
height:40%;
`
export const FullName = styled.div`
width: auto;
display: flex;
 flex-direction: row;
height:20%;
`
export const Header = styled.div`
width: 100%;
height:40%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
background-color: lightgrey;
`
export const H4 = styled.h3`
`
export const H3 = styled.h4`
text-align: center;
margin-left:10%;

`