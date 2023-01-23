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
      <Info>
        <Line>
          <MdLocationOn style={{color:"white"}}/><p style={{color:"white"}}>Tunisia , Centre Urbain Nord</p>
        </Line>
        <Line>
        <MdPhoneIphone style={{color:"white"}}/><p style={{color:"white"}}>+216 71852741</p>
        </Line>
        <Line>
        <MdEmail style={{color:"white"}}/><p style={{color:"white"}}>hirelab@gmail.com</p>
        </Line>
      </Info>
      <Copyright>
        <p style={{color:"white"}}>Copyright {date} &#xA9;	 Hirelab.all rights reserved</p>
      </Copyright>
    </Container>
  )
}

export default ThirdPage
