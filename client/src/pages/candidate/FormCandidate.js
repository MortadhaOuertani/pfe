import React from 'react'
import { BtnSubmit, Form, Input } from './FormCandidateElements'

const FormCandidate = () => {
    return (
        <Form>
            <Input type='name' placeholder='Your first name' required />
            <Input type='name' placeholder='Your last name' required />
            <Input type='text' placeholder='Your mobile number' required />
            <Input type='number' placeholder='Your level of study' required />
            <Input type='adress' placeholder='Your address' required />
            <Input type='text' placeholder='Your mobile number' required />
            <Input type='email' placeholder='Your Email' required />
            <Input type='password' placeholder='Password' required />
            <Input type='password' placeholder='Confirm password' required />
            <BtnSubmit type="submit" >Register</BtnSubmit>
        </Form>
    )
}

export default FormCandidate
