import axios from "axios"
import setAuthorizationHeader from "../utils/set_authorization_header"
import {push} from "react-router-redux"

export function addFlashMessage(messageType, message){
    return {
        type: 'ADD_FLASH_MESSAGE',
        messageType, 
        message
    }
}

export function removeFlashMessage(){
    return {
        type: 'REMOVE_FLASH_MESSAGE'
    }
}

export function addSignUpErrors(errors){
    return {
        type: 'SIGN_UP_FAILURE',
        errors
    }
}

export function removeSignUpErrors(){
    return {
        type: 'CLEAR_SIGN_UP_ERRORS'
    }
}

export function createAccount(email, first_name, last_name, password, redirectTo){
    return dispatch => (
        axios.post('http://127.0.0.1:8000/api/v1/create-user/', {
            email, 
            first_name, 
            last_name, 
            password
        }).then(response => {
            dispatch(addFlashMessage('success', 'You\'re account was successfully activated! You can login now'))
            dispatch(push('/'))
        }).catch(errors => dispatch(addSignUpErrors(errors.response.data)))
    )
}

export function authenticate(username, password){
    return dispatch => {
        dispatch({type: "AUTHENTICATING"})
        axios.post("http://127.0.0.1:8000/api/v1/api-token-auth/",{
            email: username,
            password: password
        }).then(response => {
            const token = response.data.token
            localStorage.setItem("token", response.data.token)
            setAuthorizationHeader(token)
            dispatch({type: "AUTHENTICATED"})
            dispatch(logIn())
        }).catch(errors => 
            dispatch(addFlashMessage("failure", "Unable to log in with provided credentials"))
        )
    }
}

export function logIn(){
    return dispatch => {
        axios.get("http://127.0.0.1:8000/api/v1/retrieve-user/")
                .then(response => {
                    dispatch(getUserInfo(response.data))
                    dispatch(push('/'))
                })
    }
}

export function getUserInfo(user_data){
    return {
        type: "SET_USER_INFO",
        ...user_data
    }
}

export function logOut(){
    return {
        type: 'LOG_OUT'
    }
}

export function verifyExistingToken(token){
    return dispatch => {
        dispatch({type: "VERIFYING_TOKEN"})
        axios.post('http://127.0.0.1:8000/api/v1/api-token-verify/', {
            token
        }).then(request => {
            dispatch({type: "TOKEN_VERIFIED"})
            setAuthorizationHeader(token)
            dispatch(logIn())
        })
    }
}
