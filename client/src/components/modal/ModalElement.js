import styled from 'styled-components';

export const Background = styled.div`
background-color: rgba(0,0,0,0.3);
position: absolute;
height: 100%;
width: 100%;
display: flex;
flex-direction: inherit;
align-items: center;
`
export const Div = styled.div`
 background: white;
 align-self: center;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  padding: 20px; 
  width:40%;
  height:70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
position:absolute;
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
height: 200px;
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
color: #6c63ff;
`