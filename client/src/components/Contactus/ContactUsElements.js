import styled from "styled-components";

export const Container = styled.div`
    height: 600px;
    width: 100%;
    align-self: center;
    background-color:black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width:900px ) {
    flex-direction:column;
  }
  &:before{
    content: "";
    height:600px;
    width: 100%;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    border-radius:5px;
}
    
`
export const ContainerBg = styled.img`
  height: 600px;
    width: 100%;
    top:1340px;
position: absolute;
object-fit:cover;
object-position:center;
`
export const H1 = styled.h1`
position: relative;
right: auto;
left: 7%;
color:white;
font-size:60px;
`

export const Input = styled.input`
  position: relative;
  right:auto;
  left: 7%;
  margin-top: 10px;
  width: 400px;
  height: 45px;
    &::placeholder {
  font-size: 18px; /*change the font-size value to make it bigger*/
}
  &:focus {
    outline: none;
  }
`;
export const Left = styled.form`
height: 90%;
width:470px;
background-color: white;
border-radius: 10px;
display: flex;
align-self: center;
flex-direction: column;
justify-content: center;
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
background-color: rgba(255,255,255,0.5);
align-self: center;
bo

@media screen and (max-width:907px ) {
  transform: translateX(0vw);
  margin-top: 50px;
  }
`
export const Textarea = styled.textarea`
  width: 400px;
  resize: none;
  position: relative;
  right:auto;
  top: 2%;
  left: 7%;
  margin-top: 20px;
height: 200px;
  &::placeholder {
  font-size: 18px; /*change the font-size value to make it bigger*/
}
`
export const Img = styled.img`
height: 100%;
width: 40%;
object-fit:cover;
object-position:center;
border-radius:5px;
object-fit:cover;
  object-position:center;

`
export const InputBtn = styled.input`
background-color: #43CBA6;
  font-size: 19px;
  font-weight: bold;
  align-self: center;
  padding: 10px 0px;
  width:80%;
  border-radius: 3px;
  color: white;
  border: transparent;
  margin-top:30px;
  cursor: pointer;
  &:hover{
  background-color: black;
    transition: all 0.2s ease-in-out;
}
`
export const Right = styled.div`
height: 100%;
width: 100%;
object-fit:cover;
object-position:center;
&:before{
    content: "";
    height:600px;
    width: 66.8%;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    border-radius:5px;
}
@media screen and (max-width:1200px ) {
    display: none;
  }
`