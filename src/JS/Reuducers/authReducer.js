import{REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../constants"
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
  };


const authReducer = (state=initialState,action)=>{
      switch(action.type){
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
              return{ ...action.payload,
                ...state,
                token :action.payload.token,
                isAuthenticated :true,
                isLoading : false}
            case LOGOUT_SUCCESS:    
            case LOGIN_FAIL:     
            case REGISTER_FAIL:
                localStorage.removeItem('token') 
                return {...state,isAuthenticated:false,
                    user:null,
                    token : null,
                    isLoading:false
                }    
          default:
              return state
      }
  }
  export default authReducer