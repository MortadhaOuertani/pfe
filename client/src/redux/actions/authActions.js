import axios from "axios"
import { ERRORS, SET_USER } from "../types"
import jwt_decode from 'jwt-decode'
import { setAuth } from "../../util/setAuth"

export const Registration = (form, navigate) => dispatch => {
    axios.post('http://localhost:3600/api/register').then(res => {
        navigate('/')
        dispatch({ type: ERRORS, payload: {} })
    }).catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data

        })
    })
}
export const LoginAction = (form, navigate)=>dispatch  => {
    axios.post('http://localhost:3600/api/login', form, {
        headers: {
            'Content-Type': 'application/json'
        } //transforme FORM on json (pour axios)
    })
        .then(res => {
            navigate('/')
            const { token } = res.data
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token)
            dispatch(setUser(decode))
            setAuth(token)
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