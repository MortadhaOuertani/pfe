import styled from "styled-components";




export const Form = styled.form`
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const Input = styled.input`
  margin-left: 30px;
  align-self: flex-start;
  margin-top: 40px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 1px solid grey ;
  width:50%;
  &:focus{
    outline:none;
  }

`;
export const BtnSubmit=styled.button`
  background-color: #6c63ff;
  font-size: 17px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  border: transparent;
  margin-right: 20%;
  cursor: pointer;
`;

