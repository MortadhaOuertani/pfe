import styled from "styled-components";

export const Container = styled.div`
height: 100%;
width: 100%;
background-color:#f8f8f8;
display: flex;
flex-direction: column;

`
export const Header = styled.div`
width: 100%;
margin-top: 10%;
height:100px;
justify-content:space-around;
align-items: center;    
display: flex;

`
export const Middle = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  column-gap: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;