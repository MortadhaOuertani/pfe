import React from 'react';
import ContactUs from '../../components/Contactus/ContactUs';
import FirstPage from '../../components/firstpage/FirstPage';
import SecondPage from '../../components/secondpage/SecondPage';
import ThirdPage from '../../components/thirdpage/ThirdPage';
import { Container } from './HomeElements';

const Home = ({ user }) => {
  return (
    <Container>
      <FirstPage>

      </FirstPage>
      <SecondPage user={user}>

      </SecondPage>
      <ContactUs >

      </ContactUs>
      <ThirdPage>

      </ThirdPage>


    </Container>
  )
}

export default Home
