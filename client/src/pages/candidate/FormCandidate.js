import React from 'react'
import { BtnSubmit, Form, Input } from './FormCandidateElements'

const FormCandidate = () => {
    return (
        <Form>
            <Input type='name' name='name' placeholder='Your first name' required />
            <Input type='name'name='lastname' placeholder='Your last name' required />
            <Input type='email' name='email'  placeholder='Your Email' required />
            <Input type='password' name='password' placeholder='Password' required />
            <Input type='password' name='confirm' placeholder='Confirm password' required />
            <Input type='phone'name='phone' placeholder='Your mobile number' required />
            <Input type='text' name='niveauEtude' placeholder='Your level of study' required />
            <Input type='address' name='address' placeholder='Your address' required />
            <Input type='date' name='anneeObtentienDiplome' placeholder='year of graduation' required />
            <Input type='text' name='diplome' placeholder='diploma' required />
            <Input type='text' name='age' placeholder='age' required />
            <BtnSubmit type="submit" >Register</BtnSubmit>
        </Form>
    )
}

export default FormCandidate
