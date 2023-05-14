import styled from "styled-components";


export const Container = styled.div`
 background-color:#f0f3f4;
 display: flex;
 justify-content: center;
 padding-bottom: 20px;
`;

export const Div =styled.div`
 display: flex;
 justify-content: center;
 width: 80%;
 height: 100%;
 align-items: center;
 flex-direction: column;
transition: all 1s ease-in;
`;

export const Header = styled.div`
   width:100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
   @media screen and (max-width:555px ){
    margin-left: 20px;
  }
`;

export const H1 = styled.h1`
color:black;
 font-weight:bolder;
 
 margin-left:-100px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
width: 100%;
align-items: center;
justify-content: center;
transition: all 0.2s ease-in;
`
export const P = styled.p`
font-size:20px;
height: 0;
width: 70%;
padding-top: 10px;
text-align:start;
color: red;
`
export const Input = styled.input`
  margin-top: 30px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:70%;
  height: 45px;
   font-size: 18px;
  &::placeholder {
  font-size: 18px; /*change the font-size value to make it bigger*/
}
  &:focus{
    outline:none;
  }

`;
export const InputD = styled.input`
  margin-top: 40px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:30%;
  height: 45px;
   font-size: 18px;
  &::placeholder {
  font-size: 18px; /*change the font-size value to make it bigger*/
}
  &:focus{
    outline:none;
  }

`;

export const BtnSubmit = styled.button`
background-color: #43CBA6;
  font-size: 17px;
  font-weight: bold;
  align-self: flex-end;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  border: transparent;
  margin-right: 20%;
  margin-top:30px;
  cursor: pointer;
  &:hover{
  background-color: black;
    transition: all 0.2s ease-in-out;
}
`;
