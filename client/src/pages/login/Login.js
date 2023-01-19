import React from 'react'
import { Container, Form, FormContainer, Input, InputContainer, OtherInputContainer } from './LoginElements'

const Login = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <Form>
            <InputContainer>
              <Input type="email"/>
              <Input type="password"/>
              <Input type="password"/>
            </InputContainer>
            <OtherInputContainer>
              <Input type="radio" name="company/candidate"/>
              <Input type="radio" name="company/candidate"/>
              <Input type="submit"/>
            </OtherInputContainer>

          </Form>
        </FormContainer>
      </Container>
    </>
  )
}

export default Login
