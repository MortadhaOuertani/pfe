import React from 'react'
import image from '../../images/register.svg';
import { Container, Form, H1, Header, Image, Input, LeftSide, RightSide, SmallerContainer, BtnRadio, Inputcontainer, Label, InputRadio, BtnSubmit } from './RegisterElements';
const Register = () => {
  return (
    <Container>
      <SmallerContainer>
        <LeftSide>
          <Header><H1>Create an account </H1></Header>
          <Form>
            <Input type='name' placeholder='Your name' required />
            <Input type='email' placeholder='Your Email' required />
            <Input type='password' placeholder='Password' required />
            <Input type='password' placeholder='Confirm password' required />
            <BtnRadio>
              <Inputcontainer><InputRadio type="radio" id="comp" name="radio" value="company" required /><Label>Company</Label></Inputcontainer>
              <Inputcontainer><InputRadio type="radio" id="cand" name="radio" value="candidate" required /><Label>Candidate</Label></Inputcontainer>
            </BtnRadio>
            <BtnSubmit  type="submit" >Register</BtnSubmit>
          </Form>
        </LeftSide>
        <RightSide>
          <Image src={image} />

        </RightSide>
      </SmallerContainer>
    </Container>


  )
}

export default Register