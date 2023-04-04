import styled from 'styled-components';

export const NavbarDiv = styled.div`
width: 100%;
top: 0;
left: 0;
background-color: black;
`;
export const H2 = styled.h2`
 padding-top: 10px;
 padding-left: 20px;
 padding-bottom: 20px;
`;
export const Hr = styled.hr`
width: 90%;
display: inline-block;
align-self: center;
margin-top: 20px;
margin-bottom: 20px;
border: 0.7px solid #F1EFF1;
margin-left: 5%;
`
export const Li = styled.li`
 font-size: 17px;
 font-weight: 500;
`;
export const ContainerOne = styled.div`
width: 100%;
height: 100%;
background-color: #e5f3ff;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width:1008px ) {

    margin-top:50px ;
}
`;

export const Container = styled.div`
 background-color: white ;
 display: flex;
 align-items: flex-start;
 padding-left: 50px;
 padding-top: 10%;
 height: 100%;
 width: 95%;
 display: flex;
 flex-direction: column;
`;

export const SearchDiv = styled.div`
 width: 100%;
 height: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color:#f2f2f2 ;   
 margin: 5px;
 padding-left: 10px;
 padding-right: 10px;
 border: solid 1px #d0d0d0;
 border-radius: 3px;
`;

export const DIV = styled.div`

display: flex;
flex-direction: row;
`;

export const TopContainer = styled.div`
 background-color: white;
 box-shadow: 0px 0px 3px 0px grey ;
 padding-bottom: 30px;
 width: 90%;
 
`;

export const BottomContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 20px;
 width: 90%;
 background-color: white;
 box-shadow: 0px 0px 3px 0px grey ;
`;
export const Button = styled.button`
    padding: 10px 110px ;
    border: none;
    background-color: #38B5EC;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    transform:translateX(-70%);
    position:relative;
    left:80%;
`;

export const P = styled.p`
 padding-left: 20px;

`;
export const Div = styled.div`
 padding-left: 20px;
 padding-bottom: 30px;
`;

export const H3 = styled.h3`
color:black;
padding-left: 20px;
padding-top: 10px;
margin-right: 10px;
`;

