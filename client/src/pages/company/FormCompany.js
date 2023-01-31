import React from 'react'
import { BtnSubmit, Form, Input } from './FormCompanyElements'

const FormCompany = () => {
    return (
        <Form>
            <Input type='name' name='name' placeholder='Your name' required />
            <Input type='address' name='address' placeholder='Your address' required />
            <Input type='text' name='phone' placeholder='Your mobile number' required />
            <Input type='email' name='email' placeholder='Your Email' required />
            <Input type='password' name='password' placeholder='Password' required />
            <Input type='password' name='confirm' placeholder='Confirm password' required />
            <Input type="file"
                id="avatar" name="logo"
                accept="image/png, image/jpeg, image/svg" />
            <BtnSubmit type="submit" >Register</BtnSubmit>
        </Form>
    )
}

export default FormCompany
