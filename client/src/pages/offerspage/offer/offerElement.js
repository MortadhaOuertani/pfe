import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';


export const Container = styled.div`
width: 70%;
margin-top: 20px;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: lightblue;
color: black;
`
export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: lightgreen;
    cursor: pointer;
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