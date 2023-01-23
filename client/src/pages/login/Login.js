import React from 'react'
import { Container,InputBtn, Form, FormContainer, H1, Header, Img, Input, Left, Right, Span } from './LoginElements'
import login from '../../images/login.svg'
const Login = () => {
  return (
    <>
      <Container><FormContainer>
        <Left>
          <Header>
            <H1>Login</H1>
          </Header>
          <Form>

            <Input type='email' required placeholder='Email' />
            <br/>
            <Input type='password' required placeholder='Password' />
            <br/>
            <InputBtn type="submit" value="Login"/>

          </Form>

        </Left>
        <Right>
          <Img src={login}></Img>
          <p><Span></Span></p>
        </Right>
      </FormContainer></Container>
    </>
  )
}

export default Login
