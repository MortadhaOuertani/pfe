import React, { useState } from 'react'
import { H1, Input, Container, Left, Right, Textarea, Line, ContainerBg, Video, Img, InputBtn } from './ContactUsElements'
import image from '../../images/bg.jpg'
const ContactUs = () => {
    const [form, setForm] = useState({})

    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setForm({
            ...form, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <Line></Line>
            <ContainerBg></ContainerBg>
            <Container>
                <Left>
                    <H1>ContactUs</H1>
                    <Input onChange={onChangeHandler} type="email" placeholder='Email'></Input>
                    <Input onChange={onChangeHandler} type="text" placeholder='Full name'></Input>
                    <Textarea onChange={onChangeHandler} placeholder='content'></Textarea>
                    <InputBtn type="button" value="Send" />
                </Left>
                <Right>
                    <Img src={image}>
                    </Img>
                </Right>
            </Container>
        </>
    )
}

export default ContactUs