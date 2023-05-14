import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FinishRegisterCandidat, LoginAction, RegistrationCandidate } from '../../redux/actions/authActions'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { BtnSubmit, Container, Div, Form, H1, P, Header, Input, InputContainer, InputD } from './FormCandidateElements'
import { Seterror } from '../../redux/actions/offerActions'

const FormCandidate = () => {
    const [name, setname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmErr, setConfirmErr] = useState('');
    const [phone, setPhone] = useState('');
    const [niveauEtude, setNiveauEtude] = useState('');
    const [address, setAddress] = useState('');
    const [anneeObtentienDiplome, setAnneeObtentienDiplome] = useState('');
    const [diplome, setDiplome] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [profile, setprofile] = useState(null);
    const [errors, setErrors] = useState();

    const error = useSelector(state => (state.errorscandidat))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
        const { name, value, files } = e.target;
        switch (name) {
            case 'name':
                setname(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'niveauEtude':
                setNiveauEtude(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'anneeObtentienDiplome':
                setAnneeObtentienDiplome(value);
                break;
            case 'diplome':
                setDiplome(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirm':
                setConfirm(value);
                break;
            case 'profile':
                setprofile(files[0]);
                console.log(profile)
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        console.log(profile)
    },)
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("1")
        if (password !== confirm) {
            setConfirmErr('Passwords do not match');
            return;
        }
        console.log("2")

        setConfirm("")
        setErrors(error)
        const formData = new FormData();
        console.log("3")
        formData.append('profile', profile);
        formData.append('name', name);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('niveauEtude', niveauEtude);
        formData.append('address', address);
        formData.append('anneeObtentienDiplome', anneeObtentienDiplome);
        formData.append('diplome', diplome);
        formData.append('age', age);
        formData.append('password', password);
        console.log("4")
        dispatch(FinishRegisterCandidat(formData, navigate));
        console.log(formData)
        // Dispatch the registration action with the updated form data

    };

    useEffect(() => {
        setErrors("")
    }, [])
    useEffect(() => {
        setErrors(error)
    }, [error])
    return (
        <>

            <Form onSubmit={onSubmit}>
                <Header><H1>Candidate's registration </H1></Header>
                <Div>
                    <InputContainer>
                        <InputD onChange={onChangeHandler} type='name' name='name' placeholder='Your first name' required />
                        <InputD onChange={onChangeHandler} type='name' name='lastName' placeholder='Your last name' required />
                    </InputContainer>
                    <Input onChange={onChangeHandler} type='email' name='email' placeholder='Your Email' required />
                    {errors &&
                        <P>{errors}  </P>
                    }
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
                    {confirm && <P>{confirmErr}</P>}
                    <div>
                        <label for="profile">Profile Picture : </label>
                        <Input onChange={onChangeHandler} type='file' accept="image/png, image/jpeg, image/svg" name='profile' placeholder='Profile Picture' required />
                    </div>
                </Div>
                <BtnSubmit type="submit" >Register</BtnSubmit>
            </Form>
        </>
    )
}

export default FormCandidate
