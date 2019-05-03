import {AUTH_USER, AUTH_ERROR, LOAD_MUSIC} from './types'
import axios from 'axios'


//tbd
export const signUp = ({email, password}, callback) => {
    
    return async (dispatch) =>{
    
        try{
            const response = await axios.post('http://localhost:3090/signup',{email, password})
            dispatch({type: AUTH_USER, payload: response.data.token})
            localStorage.setItem('token', response.data.token)
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


//******************************************* */
export const loadAllMusic = (page = 1, limit = 20) => { 
        return async (dispatch)=> {
            try{
                const res = await axios.get(`/api/music/all/?page=${page}&limit=${limit}`)
                //console.log(res.data.docs)
                dispatch({type: LOAD_MUSIC, payload: res.data})
                //return res.data
            }catch(err){
                dispatch({type: LOAD_MUSIC, payload: [err]})
            }

    }
}