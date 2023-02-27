import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';

export const Header = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
column-gap: 10px;
`
export const OffersCount = styled.div`
display: flex;
column-gap: 20px;
flex-direction: row;
`
export const Number = styled.h1`
`
export const Offers = styled.div`
    width:auto;
    box-shadow: 0px 0px 3px 0px grey ;
    height: 100%;
    padding: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background-color: #e8e7f7;
    column-gap: 20px;
    row-gap: 20px;

    border-radius: 20px;
    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
    };
`
export const SearchJob = styled.input`
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 30px;
  padding: 12px 20px;
  border-top:none ;
  border-left:none ;
  border-right:none ;
  border-radius: 4px;
  height: 10% ;
  width: 25%;
  &::placeholder{
    text-indent: 10px;
  }
  &[type=text]{
    text-indent: 10px;

  }
 &:focus{
    outline: none;
    box-shadow: none;
 }
`
export const SearchPlace = styled.input`
  padding: 12px 20px;
  border-top:none ;
  border-left:none ;
  border-right:none ;
  border-radius: 4px;
  height: 10% ;
  width: 25%;
 &::placeholder {
    content: "";
    display: inline-block;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;}
  &:focus{
    outline: none;
    box-shadow: none;
 }
`
export const Container = styled.div`
padding-top: 150px;
height: 100%;
width: 100%;
background-color: #f2f2f2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
