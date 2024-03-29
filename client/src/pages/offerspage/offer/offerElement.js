import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';


export const Container = styled.div`
width:300px;
height:300px;
display: flex;
box-shadow: -2px -2px 5px 0.5px #b0afd9 ;
flex-direction: column;
border-radius: 8px;
background-color: white;
color: black;

`
export const Button = styled.button`
    padding: 10px 30px ;
    border: none;
    background-color: #42CCA6;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-left: 50%;
    white-space: nowrap;
` 
export const ButtonDelete = styled.div`
    width: 30px;
    height: 30px;
    border: none;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: rgb(205,41,57);
    cursor: pointer;
    border-radius: 3px;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;

` 
export const Background = styled.div`
background-color: rgba(0,0,0,0.3);
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

`

export const Topside = styled.div`
display: flex;
width: 100%;
height: 30%;
flex-direction: row;
`
export const Imgdiv = styled.div`
width: 40%;
height: 80%;
`
export const Info = styled.div`
padding-top:10px;
display: flex;
flex-direction: column;
row-gap: 5px;

`
export const H2 = styled.h3`
`
export const H3 = styled.h3`
`
export const Img = styled.img`
width:auto;
margin-top:5px;
margin-left:10px;
height:100px;
object-fit:cover;
object-position:center;
`
export const Middleside = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
column-gap: 50px;
`

export const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
flex-direction:row;
`
