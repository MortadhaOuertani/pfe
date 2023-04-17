import styled from "styled-components";

export const Div = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

export const Header = styled.div`
  width:100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-top: -30px;
`;

export const H1 = styled.h1`
  color:black;
 font-weight:bolder;
 
 margin-left:-100px;
`;

export const Alert = styled.div`
position: fixed;
width: 100%;
height:40px;
top: 0;
left: 0;
right: 0;
background-color:green;
color: white;
padding: 1rem;
align-items: center;
display: flex;
justify-content: center;
margin-bottom: 1rem;
transform: translateY(${props => (props.show ? "0" : "-100%")});
z-index: 2000022222;
transition: transform 0.3s ease-in-out;
`;
export const H1Succ = styled.h1`
color: white;
font-weight:bolder;

`
export const Form = styled.form`
 width: 100%;
  display: flex;
  flex-direction:column;
  @media screen and (max-width:900px ) {
    padding-bottom: 50px;
  
  }
`;
export const P = styled.p`
height: 0;
width: 60%;
padding-top: 10px;
text-align:start;
font-size:20px;
color: red;
`
export const Input = styled.input`
  margin-top: 40px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:60%;
  height: 45px;
   font-size: 18px;
  &::placeholder {
  font-size: 18px; /*change the font-size value to make it bigger*/
}

  &:focus{
    outline:none;
  }
`;
export const ButtonsConatainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  column-gap: 30px;
  padding-bottom: 30px;

`
export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-weight: bold;
background-color:#617E95;
border: none;
border-radius: 5px;
margin-top: 30px;
padding: 20px 10px;
font-size: 17px;

`

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
  position: relative;
  cursor: pointer;
  top:60px;
  &:hover{
  background-color: black;
    transition: all 0.2s ease-in-out;
}
  @media screen and (max-width:900px ) {
    top:20px;
  
  }
`;

