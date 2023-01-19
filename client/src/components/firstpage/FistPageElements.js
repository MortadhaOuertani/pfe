import React from "react";
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';


export const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  :before{
    position: relative;
    content:"";
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    right:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index:2;
  }

`;

export const HeroBg = styled.div`
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  height: 100%;
  width: 100%;
  overflow: hidden;


`;

export const VideoBg = styled.video`
  width:100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  filter: blur(3px);

`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const HeroH1 = styled.div`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width:768px ) {
    font-size: 40px;
  }
  @media screen and (max-width:480px ) {
    font-size: 32px;
  }
`

export const HeroP = styled.div`
  margin-top: 24px;
  color:#fff;
  font-size:24px ;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width:768px ) {
    font-size: 24px;
  }
  @media screen and (max-width:480px ) {
    font-size: 18px;
  }
`
export const HeroBtn = styled.div`
margin-top:30px;

`
export const Button = styled(Link)`
text-decoration: none;
transition: all 0.1s ease-in-out;
padding: 10px 20px;
color: black;
border-radius: 50px;
z-index: 4;
background-color:white;
&:hover{
  border-radius: 50px;
  transition: all 0.1s ease-in-out;
  background-color: black;
  color:white;

}

`