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
  height: 700px;
  align-items: center;
  padding-bottom: 40px;
  display: flex;
  background-color: white;
  justify-content: center;
  z-index: 8;
  @media screen and (max-width:900px ) {
  flex-direction: column;
  height: 100%;
  padding-top: 50px;

  }
`;

export const VL = styled.div`
align-self: center;
  border-left: 2px solid lightgrey;
  height: 650px;
  margin-top: 30px;
  @media screen and (max-width:900px ) {
    display: none;
  }
`
export const Hr = styled.hr`
  border: 1px solid lightgrey;
  display: none;
  width: 80%;
  @media screen and (max-width:900px ) {
    display: block;
  }
`
export const Right = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
`
  ;

export const Title1 = styled.h2`
  position: relative;
  color: #29aacd;
`;

export const Parag1 = styled.h4`
`;