import React from "react";
import styled from "styled-components";

export const SmallerContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius:15px;
  flex-direction:row;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  z-index: 1000;
  background-color: black;
  justify-content: center;
`;

export const Right = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
transition: all 2s ease-in-out;
  width: 100%;
  position: relative;
  
  display: flex;
  text-align: start;
  padding-top: 70px;
  padding-left: 30px;
  flex-direction:column;
  
`
;

export const Image = styled.img`
  width: auto;
  height: 300px;
  border-radius: 10px;
  opacity:${({show}) => (show?"1":"0")} ;
  top:${({show}) => (show?"0px":"50px")};
  transition: all 1.5s;
  position: relative;
`;

export const Title1 = styled.h2`
  font-size: 30px;
  transition: all 1.5s;
  position: relative;
  color: #29aacd;
  opacity:${({show}) => (show?"1":"0")} ;
  top:${({show}) => (show?"0px":"50px")};
  margin-left: 15px;
`;

export const Parag1 = styled.h4`
margin-left: 30px;
margin-top: 30px;
transition: all 1.5s;
position: relative;
opacity:${({show}) => (show?"1":"0")} ;
top:${({show}) => (show?"0px":"50px")};
`;