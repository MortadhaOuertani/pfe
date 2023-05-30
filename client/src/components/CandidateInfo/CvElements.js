import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightgrey;
display: flex;
overflow-y: scroll;
overflow: hidden;
flex-direction: row;
`
export const LeftSide = styled.div`
width: 100%;
margin-top: 90px;
padding-right: 50px;
height: 100%;
align-items: center;
display: flex;
justify-content: center;
`
export const Iframe = styled.iframe`
display: flex;
flex-direction: center;
align-items: center;
`
export const H1 = styled.h1`
font-size: 18px;
`

export const RightSide = styled.div`
width: 100%;
padding-top: 100px;
overflow-y: scroll;
display: flex;
height: 200%;
`