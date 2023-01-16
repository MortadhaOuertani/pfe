import React from "react";
import  styled  from "styled-components";

export const Left = styled.div`
  height: 100%;
  color: black;
  
`;

export const Right = styled.img`
   height: 80%;
   width: auto;

`;

export const Container = styled.div`
  height: calc(100vh - 60px) ;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`