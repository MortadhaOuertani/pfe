import axios from "axios"
import { ERRORS, ERRORSCANDIDAT, ERRORSCOMPANY, SET_USER } from "../types"
import jwt_decode from 'jwt-decode'
import { setAuth } from "../../util/setAuth"

export const RegistrationCandidate = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/register/candidate', form).then(res => {
        navigate('/login')
        dispatch({
            type: ERRORS,
            payload: ''

        })
        dispatch({ type: ERRORS, payload: {} })
    }).catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data

        })
    })
}
export const FinishRegisterCompany = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/registercompany', form).then(res => {
        navigate('/login')
        dispatch({ type: ERRORS, payload: {} })
        alert("an email has been sent please confirm your registeration")
    }).catch(err => {
        dispatch({
            type: ERRORSCOMPANY,
            payload: err.response.data

        })
    })
}
export const FinishRegisterCandidat = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/registercandidat', form).then(res => {
        dispatch({ type: ERRORS, payload: {} })
        alert("an email has been sent please confirm your registeration")
        navigate('/login')

    }).catch(err => {
        dispatch({
            type: ERRORSCANDIDAT,
            payload: err.response.data

        })
    })
}
export const RegistrationCompany = (token, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/register/company', token).then(res => {
        navigate('/login')
        dispatch({ type: ERRORS, payload: {} })
    }).catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data

        })
    })
}



export const LoginActionCandidate = (form, navigate) => dispatch => {
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
            navigate('/offers')
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            });
        })
}

export const LoginActionCompany = (form, navigate) => dispatch => {
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
            navigate('/company')

        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            });
        })
}

export const LoginAdmin = (form, navigate) => dispatch => {
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
            if (err.response) {
                dispatch({
                    type: ERRORS,
                    payload: err.response.data
                });
            } else {
                    console.log("other error")
            }
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