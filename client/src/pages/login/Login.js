import React, { useEffect, useState } from 'react'
import { Container, InputBtn, Form, FormContainer, H1, Header, Img, Input, Left, Right, Span, Link, IconBtn, InputDiv } from './LoginElements'
import login from '../../images/login.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginActionCandidate, LoginActionCompany, LoginAdmin } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const [Icon, setIcon] = useState();
  const handleIcon = () => { if (showPassword){
    setIcon(visibleIc);
  }else{setIcon(invisibleIc);}}

  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()
  const invisibleIc =  `url(data:image/svg+xml,${encodeURIComponent(` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
  `
      )})` ; 
  
  const visibleIc =`url(data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`
  )})` ;

  useEffect(()=>{
    handleIcon()
  },)

  const onChangeHandler = (e) => {  //d??claration d'un event de nom onChangeHandler pour d??tecter les changements de chaque input
    setForm({
      ...form, //setForm va prendre la formulaire(form)
      [e.target.name]: e.target.value //elle va prendre la valeur de d'un input ?? partire le nom de l'input
    })
  }
  const onSubmit = (e) => { //un event qui va envoyer les donn??es au base de donn??es 
    e.preventDefault(); //ne refraichir pas la page pour ne perdre pas les donn??es 

    dispatch(LoginActionCandidate(form, navigate))//appeler la fonction loginActionCandidate qui se trouve dans le store 
    dispatch(LoginActionCompany(form, navigate))//appeler la fonction loginActionCompany qui se trouve dans le store 
    dispatch(LoginAdmin(form, navigate))
  }

  return (
    <>
      <NavbarDiv />
      <Container>
        <FormContainer>
          <Left>
            <Header>
              <H1>Login</H1>
            </Header>
            <Form onSubmit={onSubmit}>
              <Input onChange={onChangeHandler} name="email"
                type='email' required placeholder='Email' />
              {errors.email}
              <br />
              <InputDiv>
                <Input
                  name="password"
                  onChange={onChangeHandler}
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Password"
                  style={{
                    backgroundImage: Icon,
                    backgroundRepeat: 'no-repeat',   
                    backgroundPositionX: '98%',
                    backgroundPositionY: '50%',
                  }}

                /> <IconBtn onClick={handleTogglePassword}></IconBtn></InputDiv>           <br />
              <Link to='/forgotpassword'>Forgot password ?</Link>
              <InputBtn type="submit" value="Login" />
            </Form>
          </Left>
          <Right>
           { /* style={{
              backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`
              )})`,
              backgroundRepeat: 'no-repeat',   //nkamel lkhedma ky tabda false nhot l icon lekhr 
              backgroundPositionX: '98%',
              backgroundPositionY: '50%',
            }}  */ }

            <Img src={login}></Img>

          </Right>
        </FormContainer>
      </Container>
    </>
  )
}

export default Login
