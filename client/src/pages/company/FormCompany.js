import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RegistrationCompany } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { BtnSubmit, Button, ButtonsConatainer, Container, Div, Form, H1, Header, Input } from './FormCompanyElements'

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
        e.preventDefault();

        // Read the selected file and convert it to base64
        const reader = new FileReader();
        const file = e.target.logo.files[0];

        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64Image = reader.result.split(",")[1];

            // Add the base64-encoded image to the form data
            const formData = { ...form, logo: base64Image };
            dispatch(RegistrationCompany(formData, navigate))
        }
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Header><H1>Register as a employer </H1></Header>
                <Div>
                    <Input onChange={onChangeHandler} type='name' name='name' placeholder='Your name' required />
                    <Input onChange={onChangeHandler} type='address' name='address' placeholder='Your address' required />
                    <Input onChange={onChangeHandler} type='text' name='phone' placeholder='Your mobile number' required />
                    <Input onChange={onChangeHandler} type='email' name='email' placeholder='Your Email' required />
                    <Input onChange={onChangeHandler} type='password' name='password' placeholder='Password' required />
                    <Input onChange={onChangeHandler} type='password' name='confirm' placeholder='Confirm password' required />
                    <Input onChange={onChangeHandler} type="file"
                        id="avatar" name="logo" placeholder='Profile Picture'
                        accept="image/png, image/jpeg, image/svg" />
                    <BtnSubmit type="submit" >Register</BtnSubmit>
                </Div>
            </Form>
        </>
    )

}
export default FormCompany
