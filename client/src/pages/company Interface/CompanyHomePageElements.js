import styled, { css, keyframes } from 'styled-components';
import { NavLink as Links } from 'react-router-dom';

export const ContainerOne = styled.div`
width: 100%;
height: 100%;
background-color: #e5f3ff;
display: flex;
align-items: center;
justify-content: center;
`;

export const Icon = styled.div`
height: 30px;
cursor: pointer;
width: 30px;
margin-left:-50px;
`
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const UpperSide = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  align-items: center;
  display: flex;
  animation: ${slideIn} 0.3s ease-out forwards;

`
export const H1 = styled.h1`
color: black;
font-weight: 500;
margin-left: 40px;
`
export const H1Name = styled.h1`
color: black;
font-weight: 500;
font-size: 60px;
margin-top: 40px;
`

export const Ul = styled.ul`
  animation: ${({ showDropdown }) => (showDropdown ? css`${slideDown} 0.3s ease` : css`${slideUp} 0.3s ease`)};
  position: absolute;
  top: 50px; 
  left: -50px;
  width: 200px; 
  padding: 0;
  transition: all 0.5s ease-in-out; 
   margin: 0;
  list-style: none;
  border: 1px solid #ccc; 
  border-radius: 10px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  overflow-y: scroll;
  max-height: ${({ showDropdown }) => (showDropdown ? '200px' : '200px')};
`
export const Button = styled.button`
width: 100%;
height: 40px;
background-color:white;
display: flex;
flex-direction: row;
text-align: center;
align-items:center;
border:none;
padding-left: 70px;
font-size: 16px;
font-weight: 500;
cursor: pointer;
&:hover{
  background-color: rgb(0,145,242);
}
`
export const P = styled.p`
color:black;
margin-left: 10px;
width: 100%;
height: 100%;
display: flex;
align-items: center;
&:hover{
  width: 100%;
  height: 100%;
  color: white;
}
`
export const Li = styled.li`
border: none;
color: white;
`
export const Header = styled.div`
width: 30%;
height: 100px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
column-gap: 10px;
margin-top: 40px;
border: none;
`
export const OffersCount = styled.div`
display: flex;
column-gap: 20px;
flex-direction: row;
`
export const Number = styled.h1`
`
export const Offers = styled.div`
    width:77%;
    box-shadow: 0px 0px 3px 0px grey ;
    height: 100%;
    padding: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    column-gap: 20px;
    row-gap: 20px;

    border-radius: 20px;
    @media (max-width: 768px) {
        height: 80%;
        flex-direction: column;
    };
`
export const SearchJob = styled.input`
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 30px;
  padding: 12px 20px;
  padding-bottom: 5px;
  border-top:none ;
  border-left:none ;
  border-right:none ;
  border-radius: 4px;
  height:30px ;
  width: 100%;
  margin-top: 50px;
  box-shadow: 2px 7px 4px rgba(0, 0, 0, 0.1); 

  &::placeholder{
    text-indent: 10px;
  }
  &[type=text]{
    text-indent: 10px;

  }
 &:focus{
    outline: none;
 }
`
export const SearchPlace = styled.input`
  padding: 12px 20px;
  border-top:none ;
  border-left:none ;
  border-right:none ;
  border-radius: 4px;
  height: 10% ;
  width: 5%;
 &::placeholder {
    content: "";
    display: inline-block;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;}
  &:focus{
    outline: none;
    box-shadow: none;
 }
`
export const Container = styled.div`
padding-top: 150px;
height: 100%;
width: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white ;
`
