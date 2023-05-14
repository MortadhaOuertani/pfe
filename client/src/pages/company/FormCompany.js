import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FinishRegister, FinishRegisterCompany, RegistrationCompany } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Alert, BtnSubmit, Button, ButtonsConatainer, Container, Div, Form, H1, H1Succ, Header, Input, P } from './FormCompanyElements'

const FormCompany = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmErr, setConfirmErr] = useState('');
  const [logo, setLogo] = useState(null);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  const error = useSelector(state => (state.errorscompany));
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setErrors('');
    const { name, value, files } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
        case 'confirm':
        setConfirm(value);
        break;
      case 'logo':
        setLogo(files[0]);
        console.log(logo)
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setConfirmErr('Passwords do not match');
      return;
    }
    setConfirm('');
    setErrors(error);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('logo', logo);

    setSuccess(true);
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setShow(false), 2000);
    setTimeout(() => setSuccess(false), 3000);
    dispatch(FinishRegisterCompany(formData, navigate));
  };

  useEffect(() => {
    setErrors('');
  }, []);

  useEffect(() => {
    setErrors(error);
  }, [error]);

  return (
        <>
       
            <Form onSubmit={onSubmit}>
                <Header><H1>Company's Registration</H1></Header>
                <Div>
                    <Input onChange={onChangeHandler} type='name' name='name' placeholder='Your name' required />
                    <Input onChange={onChangeHandler} type='address' name='address' placeholder='Your address' required />
                    <Input onChange={onChangeHandler} type='text' name='phone' placeholder='Your mobile number' required />
                    <Input onChange={onChangeHandler} type='email' name='email' placeholder='Your Email' required />
                    {errors &&
                        <P>{errors}  </P>
                    }
                    <Input onChange={onChangeHandler} type='password' name='password' placeholder='Password' required />
                    <Input onChange={onChangeHandler} type='password' name='confirm' placeholder='Confirm password' required />
                    {confirm && <P>{confirmErr}</P>}

                    <div>
                        <label for="profile">Profile Picture : </label>
                        <Input onChange={onChangeHandler} type="file"
                            id="avatar" name="logo" placeholder='Profile Picture'
                            accept="image/png, image/jpeg, image/svg" />
                        <BtnSubmit type="submit" >Register</BtnSubmit>
                    </div>

                </Div>
            </Form>
        </>
    )

}
export default FormCompany
