import styled from "styled-components";

export const Form = styled.form`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
row-gap: 20px;
width: 100%;
height: 100%;
`; 

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
background-color: #e5f3ff;
`;

export const Div = styled.div`
width: 500px;
height: 400px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
row-gap:50px;
padding-top:50px;
`;

export const Button = styled.button`
background-color: #42cca6;
font-size: 20px;
font-weight: 600;
padding: 10px 15px;
border-radius: 10px;
color: white;
border: transparent;
cursor: pointer;
align-self:start;
transform:translateX(30%);

`;

export const H2 = styled.h1`
font-size:60px;
transform:translateX(10%);

`;

export const Input = styled.input`
width:200px;
`;

export const P =styled.h3`
text-align: start;
font-size:25px;
transform:translateX(10%);

`;
export const Error =styled.h3`
text-align: start;
color:red;
`;
export const Success =styled.h3`
text-align: start;
color:green;
`;

export const Div2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
column-gap: 20px;
width: 100%;

`;
export const ImgContainer = styled.div`
height: 100%;
width:100% ;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
`;

export const Img = styled.img`
align-self: center;
margin-left: 40px;
width: auto;
height: 80%;
`
