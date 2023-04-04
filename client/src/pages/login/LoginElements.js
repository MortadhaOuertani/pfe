import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';


export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background:#e5f3ff;
padding-top:60px;
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
export const Span = styled.span`

`;
export const P = styled.p`
height: 0;
width: 91%;
font-size:17px;
color: red;
@media screen and (max-width:1100px ) {
  transform: translateX(24%);

}
`
export const InputDiv = styled.div`
width: 100%;
display: flex;
flex-direction: row;
@media screen and (max-width:1100px ) {
  transform: translateX(23%);
}
`;
export const IconBtn = styled.div`
height:40px;
margin-top: 50px;
margin-left: -35px;
display: flex;
justify-content:center;
align-items:center;
z-index: 3;
width: 30px;
cursor:pointer;
`;

export const Left = styled.div`
width: 100% ;
height: 80%;
display: flex;
flex-direction: column;
`
export const Img = styled.img`
height: auto;
width: 80%;
@media screen and (max-width:700px ) {
width: 100% ;

}
`
export const Right = styled.div`
width: 100% ;
height: 80%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;

@media screen and (max-width:1100px ) {
display: none;
}
@media screen and (max-width:1500px ) {
  align-items: start;
  justify-content:start;
  width: 80%;

}
`

export const Header = styled.div`
display: flex;
width: 100%;
height: 20px;
align-items: center;
justify-content: center;
`

export const H1 = styled.h1`
color:  #43CBA6;
position: absolute;
width: 100%;
position: relative;
margin-left: 50px;
text-align: start;
`
export const Input = styled.input`
margin-left: 30px;
align-self: flex-start;
margin-top: 50px;
border-top:transparent;
border-left:transparent ;
border-right: transparent;
border-bottom: 1px solid black;
height: 40px;
width:50%;
&:focus{
  outline: none;
}
@media screen and (max-width:1100px ) {
  align-self: center;
}
`
export const Form = styled.form`
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
transition: all 1s ease-out;
`
export const InputBtn = styled.input`
background-color:  #43CBA6;
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

export const Link = styled(Links)`
  text-decoration:none;
  align-self: flex-start;
  margin-left: 20%;
  margin-top:30px;
  @media screen and (max-width:1100px ) {
    width: 100%;
  transform:translateX(7.5%) ;
}
`;
