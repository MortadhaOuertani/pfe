  import React, { useState } from 'react';
  import styled from 'styled-components';

  export const Div = styled.div`
  background: white;
  align-self: center;
  top: ${({ modalShow }) => (modalShow ? '50%' : '-50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  z-index: 2121212122;
  align-items: center;
  position: absolute;
  transition: top 0.5s ease-in-out;
`;


  export const Hr = styled.hr`
  width: 80%;
  margin-top: 30px;

  `
  export const Background = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 212121212;
  flex-direction: inherit;
  align-items: center;
  `
  export const Topside = styled.div`
  align-self: flex-end;
  height: 10px;
  `
  export const Form = styled.form`
  display: flex;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  row-gap: 40px;

  `
  export const Input = styled.input`
  `
  export const InputText = styled.input`
  height: 100%;
  width: 100%;
  `
  export const Button = styled.button`
  align-self: flex-end;
  background-color: #6c63ff;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius:10px;
  color: white;
  border: transparent;
  cursor: pointer;
  `
  export const H1 = styled.h1`
  color: black;
  `
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

  `
  export const ResultSuccess = styled.div`
  display: flex;
      align-items: center;
      width: 100%;
      border-color: #ebccd1;
      border-radius: 20px;
      font-weight: bold;
  `