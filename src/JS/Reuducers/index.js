import { combineReducers } from 'redux';
import contactReducer from './contactRuducer';
import error from './errorReducer';
import auth from './authReducer'
export default combineReducers({
    contactReducer,
    auth,
    error,
})
