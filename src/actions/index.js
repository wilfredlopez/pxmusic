import {AUTH_USER, AUTH_ERROR} from './types'
import axios from 'axios'


//tbd
export const signUp = ({email, password, firstname , lastname, admin}, callback) => {
    
    return async (dispatch) =>{
    
        try{
            const response = await axios.post('/users/create',{email, password, firstname, lastname, admin})
            dispatch({type: AUTH_USER, payload: response.data[1].token})
            localStorage.setItem('token', response.data[1].token)
            callback()
        }catch(err){
            dispatch({type: AUTH_ERROR, payload: 'Email already registered'})
        }
    }
}

//pxmusic verified
export const signOut = ()=>{
    localStorage.removeItem('token')

    return {
        type:AUTH_USER,
        payload: ''
    }
}



//pxmusic set up
export const SignIn = ({email, password}, callback) => {
    
    return async (dispatch) =>{
    
        try{
            const response = await axios.post('/users/login',{email, password})

            console.log(response.data)
            dispatch({type: AUTH_USER, payload: response.data[1].token})
            localStorage.setItem('token', response.data[1].token)
            callback()
        }catch(err){
            dispatch({type: AUTH_ERROR, payload: 'Invalid Credentials'})
        }
    }
}

