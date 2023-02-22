import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../../images/register.svg';
import { Container, Form, H1, Header, Image, LeftSide, RightSide, SmallerContainer, BtnRadio, Inputcontainer, Label, InputRadio, BtnSubmit, P, Link } from './RegisterElements';
const Register = () => {
  const navigate = useNavigate()
  const SubmitForm = (e) => {
    e.preventDefault();
    if (typeUser == "candidate") {
      navigate('/formCandidate')
    }
    else if (typeUser == "company") {
      navigate('/formCompany')
    }
  }
  const [typeUser, setTypeUser] = useState("")
  const HandleChange = (e) => {
    setTypeUser(e.target.value)
  }
  return (
    <Container>
      <SmallerContainer>
        <LeftSide>
          <Header><H1>Create an account </H1></Header>
          <Form onSubmit={SubmitForm}>
            <BtnRadio>
              <Inputcontainer><InputRadio onChange={HandleChange} checked={typeUser === "company"} type="radio" name="radio" value="company" required /><Label>Company</Label></Inputcontainer>
              <Inputcontainer><InputRadio onChange={HandleChange} checked={typeUser === "candidate"} type="radio" name="radio" value="candidate" required /><Label>Candidate</Label></Inputcontainer>
            </BtnRadio>
            <BtnSubmit type="submit" >Register</BtnSubmit>
          </Form>
        </LeftSide>
        <RightSide>
          <Image src={image} />
          <P>If you have an account<Link to='/login'>Click Here</Link></P>
        </RightSide>
      </SmallerContainer>
    </Container>


  )
}

export default Register