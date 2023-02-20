import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RegistrationCompany } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { BtnSubmit, Container, Div, Form, H1, Header, Input } from './FormCompanyElements'

const FormCompany = () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors)
    const navigate = useNavigate()
    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setForm({
            ...form, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value //elle va prendre la valeur d'un input à partir le nom de l'input
        })
    }
    const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
        e.preventDefault(); //ne refraichir pas la page pour ne perdre pas les données 
        dispatch(RegistrationCompany(form, navigate))
    }
    return (
        <>
            <NavbarDiv />
            <Container>
                <Form onSubmit={onSubmit}>
                    <Div>
                        <Header><H1>Create an account </H1></Header>
                        <Input onChange={onChangeHandler} type='name' name='name' placeholder='Your name' required />
                        <Input onChange={onChangeHandler} type='address' name='address' placeholder='Your address' required />
                        <Input onChange={onChangeHandler} type='text' name='phone' placeholder='Your mobile number' required />
                        <Input onChange={onChangeHandler} type='email' name='email' placeholder='Your Email' required />
                        <Input onChange={onChangeHandler} type='password' name='password' placeholder='Password' required />
                        <Input onChange={onChangeHandler} type='password' name='confirm' placeholder='Confirm password' required />
                        <Input onChange={onChangeHandler} type="file"
                            id="avatar" name="logo"
                            accept="image/png, image/jpeg, image/svg" />
                        <BtnSubmit type="submit" >Register</BtnSubmit>
                    </Div>
                </Form>
            </Container>
        </>
    )

}
export default FormCompany
