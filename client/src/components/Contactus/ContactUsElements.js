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
object-fit:cover; //Spécifie comment redimensionner une balise <img> pour qu'elle s'adapte à son conteneur
object-position:center; // centre l'image horizontalement et verticalement dans son conteneur
@media screen and (max-width:900px ) {
  top:2060px;

  }
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
backdrop-filter: blur(4px); //flouter l'arrière plan
background-color: rgba(255,255,255,0.5);
align-self: center;

   @media screen and (max-width:907px ) { //si taille inférieur à 907
     transform: translateX(0vw); //déplacer l'element horizentalement 
     margin-bottom: 61px; 
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
