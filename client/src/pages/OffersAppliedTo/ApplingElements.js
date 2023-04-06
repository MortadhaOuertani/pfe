import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
background-color:#e5f3ff;
display: flex;
align-items: center;
flex-direction: column;
@media screen and (max-width:790px ) {
min-width:610px;

  }

`
export const Header = styled.div`
width: 90%;
margin-top: 10%;
background-color: white;
border-top-right-radius: 20px;
border-top-left-radius:20px ;
height:100px;
justify-content:space-around;
align-items: center;    
display: flex;
@media screen and (max-width:790px ) {
min-width:610px;

margin-top: 20%;

  }

`
export const Middle = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  padding-top: 30px;
  text-align: center;
  column-gap: 40px;
  row-gap: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width:790px ) {
  min-width:610px;
  }
`;
export const Templates = styled.div`
width: 80px;
height: 30px;
display: flex;
column-gap: 30px;
flex-direction: row;
`
export const Img = styled.img`

`
export const RH = styled.div`
width: 100%;
height: 100%;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center ;
`
export const Technical = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center ;
height: 100%;
cursor: pointer;
`
export const LinkS = styled(Link)`
text-decoration: none;
color: inherit;
height: 100%;
width: 100%;
display: flex;


`
export const LinkR = styled(Link)`
`