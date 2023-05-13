import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Hr, Image, Left, Left2, Parag1, Right, SmallerContainer, Title1, VL } from './SecondPageElements';
import FormCompany from '../../pages/company/FormCompany';
import FormCandidate from '../../pages/candidate/FormCandidate';



const SecondPage = ({ user }) => {
  return (
    <Container>
      <Left>
      <FormCompany/>
      </Left>
      <VL></VL>
      <Hr></Hr>
      <Right>
        <FormCandidate/>
      </Right>
    </Container>

  )
}

export default SecondPage
