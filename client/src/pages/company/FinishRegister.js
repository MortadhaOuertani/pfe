import React, { useEffect } from 'react'
import { Container, Form, Div, Button, H2, Input, P, Div2, Img, ImgContainer, Error, Success } from './FinishRegisterElements';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegistrationCompany } from '../../redux/actions/authActions';

const FinishRegistering = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useParams();
  const T ={token:token}
  console.log(T)
  useEffect(()=>{
  },[])
  return (
    <>
    <Container>
      <Div>
          <H2>Register</H2>
          <P>One last step before you join us ...</P>
           
          <Button onClick={()=>{ dispatch(RegistrationCompany(T, navigate))}} type="submit">Finish Registering</Button>
      </Div>
    </Container>
  </>
  )
}

export default FinishRegistering