import styled from 'styled-components';

export const Background = styled.div`
background-color: rgba(0,0,0,0.3);
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: inherit;
align-items: center;
`
export const Div = styled.div`
 background: white;
 align-self: center;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  padding: 20px; 
  width:30%;
  height:70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
position:absolute;
`