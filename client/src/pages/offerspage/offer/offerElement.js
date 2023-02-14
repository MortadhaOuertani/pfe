import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';


export const Container = styled.div`
width: 80%;
margin-top: 20px;
height: 130px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: whitesmoke;
color: black;
`
export const Button = styled.button`
    margin-right: 20px;
    padding: 10px 10px ;
    border: none;
    background-color: #7367f0;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    font-weight: 400;
`

export const Background = styled.div`
background-color: rgba(0,0,0,0.3);
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

`

export const LeftSide = styled.div`
`
export const MiddleSide = styled.div`
`
export const RightSide = styled.div`
`