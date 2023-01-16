import React from 'react';
import homeimg from '../../images/home.svg';
import { Container, Left, Right } from './FistPageElements';

const FirstPage = () => {
  return (
    <Container>
      <Left>
        Welcome to our website
      </Left>
      <Right src={homeimg}/>
      
    </Container>
  )
}

export default FirstPage
