import React, { useEffect } from 'react'
import { Container, Form, Div, Button, H2, Input, P, Div2, Img, ImgContainer, Error, Success } from './FinishregisteringElements';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegistrationCandidate } from '../../redux/actions/authActions';

const FinishRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useParams();
  const T ={token:token}
  useEffect(()=>{
  },[])
  return (
    <>
    <Container>
      <Div>
          <H2>Register</H2>
          <P>One last step before you join us ...</P>
           
          <Button onClick={()=>{ dispatch(RegistrationCandidate(T, navigate))}} type="submit">Finish Registering</Button>
      </Div>
    </Container>
  </>
  )
}

export default FinishRegister