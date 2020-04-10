import axios from 'axios';

import { returnErrors,clearErrors } from './errorActions';

import {REGISTER_FAIL,REGISTER_SUCCESS, LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS} from "../constants"


export const registerUser = ({name,email,password})=> async dispatch=>{
   
   try{
    const savedUser = await axios.post('http://localhost:5000/users/registre_user',{name,email,password})
    dispatch({
        type : REGISTER_SUCCESS,
        payload : savedUser.data
    })
    dispatch(clearErrors())
   }catch(err){
    dispatch(
        returnErrors({ msg : err.response.data, status : err.response.status, id :'REGISTER_FAIL'})
    );
      dispatch({
        type : REGISTER_FAIL
    })
   }
   
}

export const login = ({email,password})=> async dispatch=>{
   
    try{
     const loginUser = await axios.post('http://localhost:5000/users/login',{email,password})
     dispatch({
         type : LOGIN_SUCCESS,
         payload : loginUser.data
     })
     dispatch(clearErrors())
    }catch(err){
     dispatch(
         returnErrors({ msg : err.response.data, status : err.response.status, id :'LOGIN_FAIL'})
     );
       dispatch({
         type : LOGIN_FAIL
     })
    }
    
 }
 export const logout = ()=>async dispatch=>{
     dispatch({
        type : LOGOUT_SUCCESS
     })
 }


 // Setup config/headers and token
export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['auth-token'] = token;
    }
  
    return config;
  };