import React from 'react';
import styled from 'styled-components';


export const Container= styled.div`
  width: 100%;
  height:250px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color:#272727 ;
`;
export const Info= styled.div`
display: flex;
padding: 40px 20px;
border-radius: 20px;
background-color:#343434 ;   
flex-direction: column;
row-gap: 10px;
`;
export const Line= styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
`;
export const Copyright = styled.div`
display:flex;
margin-top:20px;
flex-direction: row;
`;
