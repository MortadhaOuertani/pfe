import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightgrey;
display: flex;
overflow: hidden;
flex-direction: row;
`
export const LeftSide = styled.div`
width: 50%;
padding-right: 50px;
height: 100%;
align-items: center;
display: flex;
justify-content: center;
`
export const Iframe = styled.iframe`
display: flex;
  zoom: 3; /* zoom in by 50% */
flex-direction: center;
align-items: center;
`

export const RightSide = styled.div`
width: 100%;
padding-top: 100px;
overflow-y: scroll;
display: flex;
height: 100%;
`