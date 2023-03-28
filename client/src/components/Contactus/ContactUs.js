import React, { useState } from 'react'
import { H1, Input, Container, Left, Right, Textarea, Line, ContainerBg, Video, Img, InputBtn } from './ContactUsElements'
import image from '../../images/bg.jpg'
const ContactUs = () => {
    const [form, setForm] = useState({email: '', name: '', content: '' })

    const onChangeHandler = (e) => {  //déclaration d'un event de nom onChangeHandler pour détecter les changements de chaque input
        setForm({
            ...form, //setForm va prendre la formulaire(form)
            [e.target.name]: e.target.value, //elle va prendre la valeur de d'un input à partire le nom de l'input
        })
    }
    const onSubmit = (e) => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
            })
            .catch((error) => {
              console.error('Error:', error)
            })
        e.preventDefault()

    }


    return (
        <>
            <Line></Line>
            <ContainerBg></ContainerBg>
            <Container>
                <Left>
                    <H1>ContactUs</H1>
                    <Input onChange={onChangeHandler} name="email" type="email" placeholder='Email'></Input>
                    <Input onChange={onChangeHandler} name="name" type="text" placeholder='Full name'></Input>
                    <Textarea onChange={onChangeHandler} name="content" placeholder='content'></Textarea>
                    <InputBtn onClick={onSubmit} type="button" value="Send" />
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