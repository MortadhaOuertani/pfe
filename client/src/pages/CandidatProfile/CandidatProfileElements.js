import styled from "styled-components";


export const Background = styled.form`
background:#e5f3ff;
width: 100%;
height: 100%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding-top:110px;
padding-bottom:50px;

`
export const InformationContainer = styled.div`
display: flex;
width: 90%;
height:700px;
flex-direction:column;
background: white;
margin-bottom:80px;
`
export const ColorTop = styled.div`
display: flex;
width: 100%;
height:40%;
flex-direction:column;
background: linear-gradient(90deg, rgba(111,206,194,1) 0%, rgba(23,91,121,1) 100%);
`
export const InformationBottom = styled.div`
display: flex;
width: 100%;
height:60%;
flex-direction:column;
`
export const ImgWrapper = styled.div`
margin-top:-100px ;
margin-left:50px;
width: 200px;
height: 200px;
border-radius:50%;
display: flex;
justify-content:center;
background-color: white;
align-items:center;
 position: relative;
  transition:  0.3s ease-in-out, border-color 0.2s ease-in-out;
  &:hover{
    transition:  0.3s ease-in-out, border-color 0.2s ease-in-out;
    border-color:  ${({ editing }) => editing ? 'lightblue' : 'black'};
  }
`
export const Img = styled.img`
    width:90%;
    position: absolute;
    height: 90%;
object-fit:cover;
object-position:center;
border-radius:50%;
z-index: 1;
opacity: ${({ editing }) => editing ? '0.2' : '1'};

`
export const InformationWrapper = styled.div`
    display: flex;
    flex-direction:column;
    row-gap:10px;
    padding-left:60px;
    margin-top:50px;
`
export const H2 = styled.h2`
font-size:30px;
font-weight:600;
`
export const InfoWrapper = styled.div`
display: flex;
flex-direction:row;
align-items:center;
column-gap:20px;
`
export const H4 = styled.h4`
color:grey;
`
export const H4age = styled.h4`
font-size:15px;
color:grey;
margin-bottom:-15px;
`
export const H3 = styled.h3`
color:black;
font-size:16px ;
`
export const Edit = styled.div`
 height: 0;
margin-right:30px;

 cursor:pointer;
`
export const EditDiv = styled.div`
height:10px;
width: 100%;
display: flex;
justify-content: flex-end;
`
export const AccRef = styled.div`
 height: 0;
margin-right:30px;
 cursor:pointer;
`
export const Skill = styled.div`
  width: auto;
  height: 30px;
  background-color: lightgrey;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0px 10px;
  border: 0.5px solid black;
  font-weight: 550;
`
export const Button = styled.button`
background-color:transparent;
border: none;
cursor:pointer;
`
export const Buttonskill = styled.button`
background-color:lightgrey;
border: none;
cursor:pointer;
width:60px;
height: 30px;
font-weight: 600;
font-size:14px;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const SkillDiv = styled.div`
    padding:10px 20px;
        flex-wrap: wrap;

margin-left: 30px;
margin-top:40px;
max-width: 50%;
height: auto;
display: flex;
flex-direction: row;
gap:30px;
`
export const Butonwraper = styled.div`
display: flex;
width: 50px;
height: 50px;
margin-top: 50px;
margin-left: 30px;
flex-direction: row;
column-gap:5px;
align-items: center;
justify-content: center;
text-align: center;
height: auto;
width: auto;

`

export const Input = styled.input`
border-top:none;
border-right:none;
border-left:none;
`
export const Inputskills = styled.input`
width:60px;
height: 30px;
border-radius: 5px;
background-color: lightgrey;
font-size: 14px;
border-top: none;
border-right: none;
border-left:none;
font-weight: 600;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
&:focus{
  outline: none;
}
`
export const InputImg = styled.input`
width:90%;
z-index: 2;
border-radius: 50%;
    height: 90%;
cursor: pointer;
  position: absolute;
  background-color: white;
  opacity: 0;
   display:${({ editing }) => editing ? 'inherit' : 'none'};
`;

export const InputImgLabel = styled.label`
 position: absolute;
  top: 50%;
  font-weight: bolder;
  white-space: nowrap;
  color:black;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  cursor: pointer;
  display:${({ editing }) => editing ? 'inherit' : 'none'};
`
export const SkillsContainer = styled.div`
padding-bottom: 50px;
    display: flex;
    width: 90%;
    height: 100%;
    background: white;
    align-items: flex-start;
`

