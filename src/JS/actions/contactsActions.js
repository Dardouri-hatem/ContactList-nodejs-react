import axios from 'axios'
import {GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL,
    ADD_CONTACT,
    ADD_CONTACT_FAIL,
    ADD_CONTACT_SUCCESS,
    DELETE_CONTACT} from '../constants'
import {tokenConfig} from './authActions'

export const getContacts = ()=> async (dispatch, getState)=>{
    dispatch({
        type : GET_CONTACTS
    })
    try{
       const contactsGet = await axios.get('http://localhost:5000/contacts',tokenConfig(getState));
       dispatch({
           type : GET_CONTACTS_SUCCESS,
           payload : contactsGet.data
       })
    }catch(err){
        dispatch({
            
            type : GET_CONTACTS_FAIL,
            payload : err.response.data
        })
    }
}

export const addContact = (payload)=> async (dispatch,getState)=>{
 dispatch ({
     type : ADD_CONTACT,
     payload,
 })
 try {
    await axios.post("http://localhost:5000/contacts/add_contact/",payload,tokenConfig(getState))
    dispatch({
        type : ADD_CONTACT_SUCCESS
    })

 }catch(err){
     dispatch({
         type : ADD_CONTACT_FAIL,
         err,
     })
 }
}

export const deleteContact = (payload)=>async (dispatch,getState) =>{
    dispatch({
        type : DELETE_CONTACT,
        payload
    })
    try{
        axios.delete(`http://localhost:5000/contacts/delete_contact/${payload}`,tokenConfig(getState))

    }catch(err){
        dispatch({
            err,
        })
    }
}

