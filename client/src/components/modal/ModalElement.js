import React, { useState } from 'react';
import styled from 'styled-components';

export const Div = styled.div`
  background: white;
  align-self: center;
  top: ${({ isOpen }) => (isOpen ? '50%' : '-50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 500px;
  height: 500px;
  border-radius:10px ;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  z-index: 2121212122;
  align-items: center;
  justify-content:center;
  position: absolute;
  transition: top 0.5s ease-in-out;
`;


export const Hr = styled.hr`
  width: 80%;
  margin-top: 30px;

  `;

export const Background = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 212121212;
  flex-direction: inherit;
  align-items: center;
  `;

export const Topside = styled.div`
  align-self: flex-end;
  height: 10px;
  ;`

export const Form = styled.form`
  display: flex;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  row-gap: 40px;

  `;
export const Btn = styled.button`
align-self: center;
font-size: 25px;
background-color:  #36C2E0;
border-radius: 5px;
cursor: pointer;
color:white;    
border: none;
padding-top:10px;
padding-bottom:10px ;
width: 20%;
text-align:center;

  `;

export const Label = styled.label`
 font-weight: 700;
 
`;


export const Input = styled.input`
 margin-top: 10px;
 border:none;
  `;

export const InputText = styled.textarea`
  height: 100px;
    resize: none;

  width: 90%;
  border-left:solid;
 margin-top: 10px;
 outline: none;
 margin-left:20px;
 
  `;

export const H1 = styled.h1`
  color: black;
  `;

export const ResultError = styled.div`
    display: flex;
      align-items: center;
      width: 100%;
      height:200%;
      border:1px solid #ebccd1;
      font-weight: bold;
      background-color: #f2dede;
      color: #a94b5b;
      border-radius: 5px;

  `;
export const ResultSuccess = styled.div`
  display: flex;
      align-items: center;
      width: 100%;
      border-color: #ebccd1;
      border-radius: 20px;
      font-weight: bold;
  `;