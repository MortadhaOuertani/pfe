import React, { useState } from 'react'
import { NavbarDiv } from '../../offerspage/OfferDetailsElements';
import { Container, Form, Div, Button, H2, Input, P, Div2, Img, ImgContainer, Error, Success } from './ForgotPasswordFormElements';
import password from '../../../images/password.svg'
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ForgotPasswordCandidate();
    } catch {
      try {
        await ForgotPasswordCompany();
      } catch (error) {
        setErrorMessage(error.response.data.message);
        setSuccessMessage(null);
      }
    }
  };

  const ForgotPasswordCandidate = async () => {
    try {
      const response = await axios.post('http://localhost:3600/api/forgotpassword', { email });
      setSuccessMessage(response.data.message);
      setErrorMessage(null);
    } catch (error) {
      throw error;
    }
  };

  const ForgotPasswordCompany = async () => {
    try {
      const response = await axios.post('http://localhost:3600/api/forgotcompanypassword', { email });
      setSuccessMessage(response.data.message);
      setErrorMessage(null);
    } catch (error) {
      throw error;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <NavbarDiv />
      <Container>
        <Div>
          <Form onSubmit={handleSubmit}>
            <H2>Find your account</H2>
            <P>Enter your email address to reset your password.</P>
            <Div2>
              <label htmlFor="email"><h4>Email</h4></label>
              <Input
                id='email'
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Div2>
            {errorMessage && <Error className="error">{errorMessage}</Error>}
            {successMessage && <Success className="success">{successMessage}</Success>}
            <Button type="submit">Reset password</Button>
          </Form>
          <ImgContainer><Img src={password}></Img></ImgContainer>
        </Div>
      </Container>
    </>
  );
};

export default ForgotPasswordForm;

