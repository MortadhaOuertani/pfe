import React, { useState } from 'react'
import { NavbarDiv } from '../../offerspage/OfferDetailsElements';
import { Container, Form, Div, Button, H2, Input, P, Div2, Img, ImgContainer } from './ForgotPasswordFormElements';
import password from '../../../images/password.svg'
const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Send the email to the backend API to trigger the password reset functionality
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  return (
    <>
    <NavbarDiv />
      <Container>
        <Div>
        <Form>
            <H2>Find your account</H2>
            <P>Enter your email address to reset your password.</P>
            <Div2>
              <label   htmlFor="email"><h4>Email</h4></label>
              <Input
              id='email'
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Div2>
            <Button type="submit">Reset password</Button>

          </Form>
          <ImgContainer><Img src={password}></Img></ImgContainer>
         
        </Div>
      </Container>
    </>
  )
}

export default ForgotPasswordForm
