import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';


export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background:#8fb6e9;
`
export const FormContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color:white;
flex-direction:row;
height: 80%;
width: 80%;
border-radius: 10px;
`
export const Span =styled.span`

`
export const Left = styled.div`
width: 100% ;
height: 80%;
display: flex;
flex-direction: column;
`
export const Img = styled.img`
height: 100%;
width: auto;
`
export const Right = styled.div`
width: 100% ;
height: 80%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
`

export const Header = styled.div`
display: flex;
width: 100%;
height: 20px;
align-items: center;
position: relative;
justify-content: center;
`

export const H1=styled.h1`
color: #6c63ff;
position: absolute;
width: 100%;
position: relative;
margin-left: 50px;
text-align: start;
`
export const Input=styled.input`
margin-left: 30px;
align-self: flex-start;
margin-top: 50px;
border-top:transparent;
border-left:transparent ;
border-right: transparent;
border-bottom: 1px solid black;
position: relative;

width:50%;
&:focus{
  outline: none;

}
`
export const Form=styled.form`
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
position: relative;
`
export const  InputBtn = styled.input`
background-color: #6c63ff;
font-size: 17px;
font-weight: bold;
align-self:flex-end;
padding: 10px 15px;
border-radius:10px;
color: white;
border: transparent;
margin-right: 20%;
cursor: pointer;
`;
export const P =styled.p`
  margin-top: 10px;

`;

export const Link = styled(Links)`
  margin-left: 10px;

`;
