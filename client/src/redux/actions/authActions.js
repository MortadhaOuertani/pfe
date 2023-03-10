import axios from "axios"
import { ERRORS, SET_USER } from "../types"
import jwt_decode from 'jwt-decode'
import { setAuth } from "../../util/setAuth"

export const RegistrationCandidate = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/register/candidate',form).then(res => {
        navigate('/')
        dispatch({ type:ERRORS, payload: {} })
    }).catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data

        })
    })
} 
export const RegistrationCompany = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/register/company',form).then(res => {
        navigate('/')
        dispatch({ type:ERRORS, payload: {} })
    }).catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data

        })
    })
} 



export const LoginActionCandidate = (form, navigate)=>dispatch  => {
    axios.post('http://localhost:3600/api/logincandidate', form, {
        headers: {
            'Content-Type': 'application/json'
        } //transforme FORM on json (pour axios)
    })
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token)
            dispatch(setUser(decode))
            setAuth(token)
            navigate('/')
        })
        .catch(err => {
           console.log(err)
        })
}

export const LoginActionCompany = (form, navigate)=>dispatch  => {
    axios.post('http://localhost:3600/api/logincompany', form, {
        headers: {
            'Content-Type': 'application/json'
        } //transforme FORM on json (pour axios)
    })
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token)
            dispatch(setUser(decode))
            console.log(token)
            setAuth(token)
            navigate('/')

        })
        .catch(err => {
           console.log(err)
        })
}

export const LoginAdmin = (form, navigate)=>dispatch  => {
    axios.post('http://localhost:3600/api/loginadmin', form, {
        headers: {
            'Content-Type': 'application/json'
        } //transforme FORM on json (pour axios)
    })
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token)
            dispatch(setUser(decode))
            console.log(token)
            setAuth(token)
            navigate('/admin')

        })
        .catch(err => {
           console.log(err)
        })
}

export const Logout = () => dispatch => {
    localStorage.removeItem('jwt')
    dispatch({
        type: SET_USER,
        payload: {}
    })
}
export const setUser = (decode) => ({
    type: SET_USER,
    payload: decode
})