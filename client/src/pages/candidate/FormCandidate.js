import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAction, RegistrationCandidate } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { BtnSubmit, Container, Div, Form, H1, Header, Input, InputContainer, InputD } from './FormCandidateElements'

const FormCandidate = () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setForm({
            ...form, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value //elle va prendre la valeur d'un input à partir le nom de l'input
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();

        // Read the selected file and convert it to base64
        const reader = new FileReader();
        const file = e.target.profile.files[0];

        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64Image = reader.result.split(",")[1];

            // Add the base64-encoded image to the form data
            const formData = { ...form, profile: base64Image };
            console.log(formData.profile)
            // Dispatch the registration action with the updated form data
            dispatch(RegistrationCandidate(formData, navigate));
        };
    };
    return (
        <>

            <Form onSubmit={onSubmit}>
                <Header><H1>Create an account as a employee </H1></Header>
                <Div>
                    <InputContainer>
                        <InputD onChange={onChangeHandler} type='name' name='name' placeholder='Your first name' required />
                        <InputD onChange={onChangeHandler} type='name' name='lastname' placeholder='Your last name' required />
                    </InputContainer>
                    <Input onChange={onChangeHandler} type='email' name='email' placeholder='Your Email' required />



                    <Input onChange={onChangeHandler} type='phone' name='phone' placeholder='Your mobile number' required />
                    <Input onChange={onChangeHandler} type='text' name='niveauEtude' placeholder='Your level of study' required />
                    <Input onChange={onChangeHandler} type='address' name='address' placeholder='Your address' required />
                    <InputContainer>
                        <InputD onChange={onChangeHandler} type='date' name='anneeObtentienDiplome' placeholder='year of graduation' required />
                        <InputD onChange={onChangeHandler} type='text' name='diplome' placeholder='diploma' required />
                        <InputD onChange={onChangeHandler} type='text' name='age' placeholder='age' required />
                    </InputContainer>

                    <InputContainer>
                        <InputD onChange={onChangeHandler} type='password' name='password' placeholder='Password' required />
                        <InputD onChange={onChangeHandler} type='password' name='confirm' placeholder='Confirm password' required />
                    </InputContainer>
                    <Input onChange={onChangeHandler} type='file' accept="image/png, image/jpeg" name='profile' placeholder='Profile Picture' required />
                </Div>
                <BtnSubmit type="submit" >Register</BtnSubmit>
            </Form>
        </>
    )
}

export default FormCandidate
