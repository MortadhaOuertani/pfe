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
  width: 100%;
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
`;

export const Title1 = styled.h2`
  font-size: 30px;
  color: black;
  margin-left: 15px;
`;

export const Parag1 = styled.h4`
margin-left: 30px;
`;