import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Container, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtn, HeroP, Button, ImageHero, Div, ElementsContainer, Shape, Icon, Image, P } from './FistPageElements';
import image from '../../images/bg.png'
const FirstPage = () => {
  return (
    <Container>
      <ElementsContainer>
        <HeroContent>
          <Div>
            <HeroH1><P>Find your job on Hire Lab</P></HeroH1>
            <HeroP>Welcome to HireLab , where we connect
              talented individuals with exceptional job opportunities. Our platform is
              designed to simplify the job search process and help both job seekers and
              employers find the perfect match. Whether you're a recent graduate,
              a seasoned professional, or looking to switch careers,
              we've got you covered. </HeroP>
            <HeroBtn>
              <Button to='/offers'>Get started</Button>
            </HeroBtn>
          </Div>
        </HeroContent>
        <ImageHero><Image src={image}/></ImageHero>
      </ElementsContainer>
      <Shape><Icon><BsArrowDownCircle color='white' style={{fontSize:"26px"}}/></Icon></Shape>
    </Container>
  )
}

export default FirstPage
