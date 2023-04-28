import styled from 'styled-components';



export const Alert = styled.div`
  position: fixed;
  width: 100%;
  height:60px;
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

export const ContainerOne = styled.div`
padding-top: 150px;
padding-bottom: 70px;
width: 100%;
height: 100%;
background-color: #e5f3ff;
display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 95%;
  background-color: white;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;


`
export const Header = styled.div`
  margin-bottom: 60px;
  width:100%;
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const Label = styled.h4`
display: inline-block;
  padding-top: 10px;

`;

export const LabelDiv = styled.div`
text-align: right;
  flex: 1;
  margin-left: 0%;
  text-align: left;

`;


export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
 column-gap: 10px;
 justify-content: flex-end;
  text-align: center;
  flex-direction: row-reverse;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-top: 20px;
`;

export const H1 = styled.h1`
 color:black;
 font-weight:bolder;
 margin-left:-100px;
`;

export const Button = styled.button`
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
  display: flex;
  justify-content: center;
  width: 20%;

`;

export const Form = styled.form`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
  
 
 
`;

export const Input = styled.input`
 flex: 2;
 margin-left: 20px;
  width:70%;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  &:focus{
    outline:none;
  }

`