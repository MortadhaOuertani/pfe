import styled from "styled-components";

export const Container = styled.div`
    height: 600px;
    width: 97%;
    background-color:white;
    display: flex;
    border-radius:5px;
    flex-direction: row;
    align-self: center;
    @media screen and (max-width:900px ) {
    flex-direction:column;
  }
    
`
export const ContainerBg = styled.div`
  height: 600px;
    width: 100%;
    top:1360px;
    background-color: #9EE1CD;
    z-index: -1;
position: absolute;
`
export const Line = styled.div`
width: 100%;
height: 20px;
background-color:#9EE1CD;
`

export const H1 = styled.h1`
color: #36C2E0;
align-self: flex-start;
margin-left: 50px;
font-size:60px;
`

export const Input = styled.input`
  margin-top: 40px;
  margin-left: 100px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:50%;
  height: 45px;
  &:focus{
    outline:none;
  }
`;
export const Left = styled.form`
height: 100%;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Textarea = styled.textarea`
width:70%;
margin-left: 100px;
margin-top: 40px;
height: 200px;
`
export const Img = styled.img`
height: 100%;
width: 100%;
border-radius:5px;

`
export const InputBtn = styled.input`
align-self: flex-end;
margin-top: 40px;
margin-bottom: 40px;
font-size: 25px;
background-color:  #36C2E0;
border-radius: 5px;
cursor: pointer;
color:white;    
border: none;
padding:5px 20px;
margin-right: 100px;
`
export const Right = styled.div`
height: 100%;
width: 100%;
&:before{
    content: "";
    height:600px;
    width: 48.6%;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    border-radius:5px;
}
@media screen and (max-width:1200px ) {
    display: none;
  }
`