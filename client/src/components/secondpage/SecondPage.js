import React from 'react';
import image from '../../images/aboutUs.jpg';
import { Container, Image, Left, Parag1, Right, SmallerContainer, Title1 } from './SecondPageElements';
const SecondPage = () => {
  return (
    <Container>
      <SmallerContainer>
      <Left>
        <Title1>ABOUT US</Title1> 
        <Parag1>We are a company that ...</Parag1>
      </Left>
      <Right>
        <Image  src={image} />
      </Right>
      </SmallerContainer>
    </Container>
    
  )
}

export default SecondPage
