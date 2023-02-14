import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAction, RegistrationCandidate } from '../../redux/actions/authActions'
import { BtnSubmit, Form, Input } from './FormCandidateElements'

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
    const onSubmit = (e) => { //un event qui va envoyer les données au base de données 
        e.preventDefault(); //ne refraichir pas la page pour ne perdre pas les données 
        dispatch(RegistrationCandidate(form, navigate))//appeler la fonction loginAction qui se trouve dans le store 
    }
    return (
        <Form onSubmit={onSubmit}>
            <Input onChange={onChangeHandler}type='name' name='name' placeholder='Your first name' required />
            <Input  onChange={onChangeHandler}type='name' name='lastname' placeholder='Your last name' required />
            <Input onChange={onChangeHandler}type='email' name='email' placeholder='Your Email' required />
            <Input onChange={onChangeHandler}type='password' name='password' placeholder='Password' required />
            <Input onChange={onChangeHandler} type='password' name='confirm' placeholder='Confirm password' required />
            <Input onChange={onChangeHandler} type='phone' name='phone' placeholder='Your mobile number' required />
            <Input onChange={onChangeHandler} type='text' name='niveauEtude' placeholder='Your level of study' required />
            <Input onChange={onChangeHandler} type='address' name='address' placeholder='Your address' required />
            <Input onChange={onChangeHandler} type='date' name='anneeObtentienDiplome' placeholder='year of graduation' required />
            <Input onChange={onChangeHandler} type='text' name='diplome' placeholder='diploma' required />
            <Input onChange={onChangeHandler} type='text' name='age' placeholder='age' required />
            <BtnSubmit type="submit" >Register</BtnSubmit>
        </Form>
    )
}

export default FormCandidate
