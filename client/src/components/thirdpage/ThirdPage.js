import React, { useEffect, useState } from 'react'
import { MdLocationOn,MdEmail,MdPhoneIphone } from 'react-icons/md';
import { Container, Copyright, Info, Line } from './ThirdPageElements';

const ThirdPage = () => {
  const [date , setDate] = useState();
  const getYear = () =>  setDate(new Date().getFullYear())
  useEffect(() => {
    getYear();
}, [])
  return (
    <Container>
      
      <Copyright>
        <p style={{color:"lightgrey",fontSize:"12px"}}>Copyright {date} &#xA9;	 Hirelab all rights reserved</p>
      </Copyright>
    </Container>
  )
}

export default ThirdPage
