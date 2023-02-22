import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';

export const Header = styled.div`
width: auto;
height: 100px;
display: flex;
flex-direction: row;
align-items: center;
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
`
export const SearchPlace = styled.input`
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
