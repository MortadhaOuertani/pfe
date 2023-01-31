import React, { useState } from 'react'
import { Container, InputBtn, Form, FormContainer, H1, Header, Img, Input, Left, Right, Span } from './LoginElements'
import login from '../../images/login.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAction } from '../../redux/actions/authActions'
const Login = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()
  const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
    setForm({
      ...form, //setForm va prendre la formulaire(form)
      [e.target.name]: e.target.value //elle va prendre la valeur de d'un input à partire le nom de l'input
    })
  }
  const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
    e.preventDefault(); //ne refraichir pas la page pour ne perdre pas les données 
    dispatch(LoginAction(form, navigate))//appeler la fonction loginAction qui se trouve dans le store 
  }
  return (
    <>
      <Container><FormContainer>
        <Left>
          <Header>
            <H1>Login</H1>
          </Header>
          <Form onSubmit={onSubmit}>

            <Input onChange={onChangeHandler} name="email"
              type='email' required placeholder='Email' />
            {errors.email}
            <br />
            <Input name="password" onChange={onChangeHandler} type='password' required placeholder='Password' />
            <br />
            <InputBtn type="submit" value="Login" />

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
