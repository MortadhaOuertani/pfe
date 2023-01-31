import styled from "styled-components";
import { NavLink as Links } from 'react-router-dom';



export const Container = styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 background: #8fb6e9;
 height:100vh ;
 width: 100%;
`;


export const SmallerContainer = styled.div`
 display: flex;
 flex-direction: row;
 background: white;
 justify-content: center;
 align-items: center;
 height: 80%;
 width: 80%;
 border-radius: 15px;
`;

export const LeftSide = styled.div`
 width: 100%;
 height: 80%;
 display: flex;
 flex-direction: column;
`;

export const Form = styled.form`
 
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;



export const Header = styled.div`
  display: flex;
  width:100%;
  height: 20px;
  margin-top: -20px;
  margin-bottom: 50px;
`;
export const RightSide = styled.div`
 width: 100%;
 height: 80%;
 align-items: center;
 display: flex ;
 justify-content: center;
 flex-direction: column;

`;

export const H1 = styled.h1`
 color: #6c63ff;
 margin-left: 50px;
`;
export const Label = styled.label`
text-align: center;
margin-left: 10px;
`
export const Image = styled.img`
 width: auto;
 height:90%;
 margin-right: 50px;
`;



export const BtnRadio=styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;

export const Inputcontainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 40px;

`;
export const InputRadio = styled.input`
  margin-left: 30px;
  border-bottom: 1px solid grey ;
`;


export const BtnSubmit=styled.button`
  background-color: #6c63ff;
  font-size: 17px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  border: transparent;
  margin-right: 20%;
  cursor: pointer;
`;

export const P =styled.p`
 
`;

export const Link = styled(Links)`
  margin-left: 10px;
`;
