import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 100vh;
`;

export const OffersCount = styled.div`

`;

export const Icon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Div = styled.div`
    width:auto;
    box-shadow: 0px 0px 3px 0px grey ;
    height: 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #e8e7f7;
    column-gap: 20px;
    row-gap: 20px;

    border-radius: 20px;

   
    h3{
      padding-left: 20px;
    }
  
`;

export const Notif = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  position: absolute;
  top:150px;
  right: 15px;
  left: auto;
`;

export const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  
`;

