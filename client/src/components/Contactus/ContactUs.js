import React, { useState } from 'react'
import { H1, Input, Container, Left, Right, Textarea, Line, ContainerBg, Video, Img, InputBtn } from './ContactUsElements'
import image from '../../images/bg.jpg'
import axios from 'axios'
const ContactUs = () => {
    const [form, setForm] = useState({ email: '', name: '', content: '' })

    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setForm({
            ...form, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input
        })
    }
    const onSubmithandler = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3600/api/ContactUs', form)

            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })

    }


    return (
        <>
            <ContainerBg src={image}></ContainerBg>
            <Container>

                <Left onSubmit={onSubmithandler}>

                        <H1>ContactUs</H1>
                        <Input onChange={onChangeHandler} name="email" type="email" placeholder='Email' required></Input>
                        <Input onChange={onChangeHandler} name="name" type="text" placeholder='Full name' required></Input>
                        <Textarea onChange={onChangeHandler} name="content" placeholder='content' required></Textarea>
                        <InputBtn  type="submit" value="SEND MAIL" />

                </Left>

            </Container>
        </>
    )
}

export default ContactUs