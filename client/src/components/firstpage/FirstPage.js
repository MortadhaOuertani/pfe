import React from 'react';
import Video from '../../video/video.mp4';
import { Container, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtn, HeroP, Button } from './FistPageElements';

const FirstPage = () => {
  return (
    <Container>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Find your job on Hire Lab</HeroH1>
        <HeroP>Sign up for new account and find a job .</HeroP>
        <HeroBtn>
          <Button>Get started</Button>
        </HeroBtn>
      </HeroContent>
      
    </Container>
  )
}

export default FirstPage
