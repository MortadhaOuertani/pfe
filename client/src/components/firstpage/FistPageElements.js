import styled, { keyframes } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const ImageHero = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1 !important;
  margin-left: -90px;
  margin-bottom: -30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width:542px ) {
   display: none;

  }
`
export const Imagesvg = styled.img`
width: auto;
height:100%;
`

const moveDown = keyframes`
  0% { transform: translateY(-5); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(-5px); }
`;

export const Image = styled.img`
  width:auto;
  border-radius: 10px;
  height: 550px;
  right: 20%;
  z-index: 1;
  position: absolute;
  z-index: 555 !important;

  @media screen and (max-width:1000px ) {
    right:10%;
    height: 500px;
  }
`;


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
width: 100%;
height: 600px;
`;
export const ElementsContainer = styled.div`
padding-top: 80px;
display: flex;
flex-direction: row;
max-height:900px;
  width: 100%;
  `
export const Div = styled.div`

width: auto;
height:55vh;
@media screen and (max-width:1000px ) {
    font-size: 40px;
    display: flex;
    flex-direction: column;
   justify-content: center;
  }
   @media screen and (max-width:542px ) {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
  }
`
export const Icon = styled.div`
width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;
rotate: -45deg;
transform:translateY(-5px) ;
animation: ${moveDown} 1s ease-in-out infinite;
`
export const Shape = styled.div`
background-color: #43CBA6;
width: 50px;
position: absolute;
top:575px;
height: 50px;
margin-bottom: -30px;
rotate: 45deg;
z-index: 2222222;
`
export const HeroContent = styled.div`
  z-index: 7;
  height: 100%;
  width: 100%;
  padding-top:5%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const P = styled.p`
color: #fff;
  font-size: 48px;
  z-index: 9;
  @media screen and (max-width:768px ) {
    font-size: 40px;
  }
  @media screen and (max-width:480px ) {
    font-size: 32px;
  }

`
export const HeroH1 = styled.div`
  color: #fff;
  font-size: 48px;
  z-index: 9;
  @media screen and (max-width:768px ) {
    font-size: 40px;
  }
  @media screen and (max-width:480px ) {
    font-size: 32px;
  }
`

export const HeroP = styled.div`
  margin-top: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  max-width: 600px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 9;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
  
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroBtn = styled.div`
margin-top:30px;

`

export const Button = styled(Link)`
text-decoration: none;
transition: all 0.1s ease-in-out;
padding: 10px 20px;
color: white;
font-size:19px;
font-weight: 550;
z-index: 10 !important;
background-color:#43CBA6;
&:hover{
  border-radius: 50px;
  transition: all 0.1s ease-in-out;
  color:white;

}

`






