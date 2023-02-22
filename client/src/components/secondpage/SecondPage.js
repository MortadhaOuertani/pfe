import React, { useEffect, useRef, useState } from 'react';
import image from '../../images/aboutUs.jpg';
import { Container, Image, Left, Left2, Parag1, Right, SmallerContainer, Title1 } from './SecondPageElements';
import { useInView } from 'react-intersection-observer';
import { ThemeProvider } from 'styled-components';


const SecondPage = ({user}) => {
  const { ref/*rename*/, inView } = useInView();
  const[show,setShow]=useState(false)
  const Changeview=()=>{
    if (window.scrollY>=140){
      setShow(true)
    }
    else
    setShow(false)
  
  }
useEffect(()=>{
  setShow(false)
  window.addEventListener("scroll",Changeview) //when you scroll the page the view change
  console.log(user.role)

},[])
  return (
    <Container>
      <SmallerContainer>
      <Left ref={ref} className={inView?"animatebox":""}>
        <Title1 show={show}>ABOUT US</Title1>  
        <Parag1 show={show}>We are a company thatLorem Ipsum is simply dummy text of the printing
           and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took
             a galley of type and scrambled it to make a type specimen 
          with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum</Parag1>
      </Left>
      <Right>
        <Image show={show}  src={image} />
      </Right>
      </SmallerContainer>
    </Container>
    
  )
}

export default SecondPage
