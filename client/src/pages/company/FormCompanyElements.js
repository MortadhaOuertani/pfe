import styled from "styled-components";


export const Container = styled.div`
 background-color:#f0f3f4;
 display: flex;
 justify-content: center;
 width: 100%;
 height: 100vh;
 padding-bottom: 20px;

`;

export const Div = styled.div`
 display: flex;
 justify-content: center;
 width: 80%;
 height: 100%;
 align-items: center;
 flex-direction: column;
`;

export const Header = styled.div`
  width:100%;
  height: 20px;
  margin-top: 20px;
`;

export const H1 = styled.h1`
 color: #6c63ff;
 margin-left: 50px;
`;

export const Form = styled.form`
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 80%;
 background-color: white;
`;

export const Input = styled.input`
  margin-left: 30px;
  align-self: flex-start;
  margin-top: 40px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:50%;
  &:focus{
    outline:none;
  }
`;

export const BtnSubmit = styled.button`
  background-color: #6c63ff;
  font-size: 17px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  border: transparent;
  margin-right: 20%;
  margin-bottom: 5px;
  cursor: pointer;
`;

