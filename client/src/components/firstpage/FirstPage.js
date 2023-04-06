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
            <HeroP>Welcome to HireLab! Our platform helps talented job seekers find great job opportunities,
              and it also helps employers find the right candidates.
              Whether you're new to the job market or an experienced professional,
              we can help you find the perfect match.
              We also have a filtering system that allows employers to easily search for job candidates
              based on specific keywords. This makes it easier for companies to find the most
              relevant resumes for their job offers.</HeroP>
            <HeroBtn>
              <Button to='/offers'>Get started</Button>
            </HeroBtn>
          </Div>
        </HeroContent>
        <ImageHero><Image src={image} /></ImageHero>
      </ElementsContainer>
      <Shape><Icon><BsArrowDownCircle color='white' style={{ fontSize: "26px" }} /></Icon></Shape>
    </Container>
  )
}

export default FirstPage;
