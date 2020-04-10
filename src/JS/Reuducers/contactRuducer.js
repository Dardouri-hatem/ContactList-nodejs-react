import {GET_CONTACTS,GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL, ADD_CONTACT,ADD_CONTACT_SUCCESS, ADD_CONTACT_FAIL, DELETE_CONTACT} from '../constants'

const initialState={
    isLoading : false,
    contactsList : [],
    error:[],
    redirect : false
}

const contactReducer = (state=initialState,{type,payload,err})=>{
switch(type){
    case GET_CONTACTS:
        return {...state,isLoading:true}
    case GET_CONTACTS_SUCCESS :
        return{...state, isLoading:false, contactsList:payload}
    case GET_CONTACTS_FAIL :
        return {...state, isLoading : false ,error : payload} 
    case ADD_CONTACT:
        return {...state,redirect:true}  
    case ADD_CONTACT_FAIL:
        return {...state,redirect:false}
    case ADD_CONTACT_SUCCESS:
        return {...state,redirect:false,contactsList:[...state.contactsList,payload]}    
    case DELETE_CONTACT :
        return {...state, contactsList:state.contactsList.filter(contact=>contact._id!==payload)}

    default:
        return state    
}
}


export default contactReducer