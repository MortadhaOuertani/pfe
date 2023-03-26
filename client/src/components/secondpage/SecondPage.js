import React, { useEffect, useRef, useState } from 'react';
import image from '../../images/aboutUs.jpg';
import { Container, Form, Hr, Image, Left, Left2, Parag1, Right, SmallerContainer, Title1, VL } from './SecondPageElements';
import { useInView } from 'react-intersection-observer';
import FormCompany from '../../pages/company/FormCompany';
import FormCandidate from '../../pages/candidate/FormCandidate';



const SecondPage = ({ user }) => {
  const [show, setShow] = useState(false)
  const Changeview = () => {
    if (window.scrollY >= 140) {
      setShow(true)
    }
    else
      setShow(false)

  }
  useEffect(() => {
    setShow(false)
    window.addEventListener("scroll", Changeview) //when you scroll the page the view change
    console.log(user.role)

  }, [])
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
