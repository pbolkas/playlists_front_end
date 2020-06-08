import {USER_ACTIONS} from '../Actions/UserActions';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  jwtToken: 'foo',
  username: ''
}

const userReducer = (state = initialState, action)=> {
  
  switch(action.type){
    case (USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION):{
      return{
        ...state,
        isLoading : true,
      }
    }
    case (USER_ACTIONS.USER_LOGIN_RESOLVED_ACTION):{
      return{
        ...state,
        isLoading : false,
        jwtToken : action.jwtToken,
        username : action.username,
        isLoggedIn : true,
      }
    }
    case (USER_ACTIONS.USER_LOGIN_REJECTED_ACTION):{
      return {
        initialState
      }
    }
    case (USER_ACTIONS.USER_LOGOUT_REQUEST_ACTION):{
      return {
        initialState
      }
    }
    default:
      return state;
  }
}

export default userReducer;