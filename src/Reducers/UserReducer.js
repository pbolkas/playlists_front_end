import {USER_ACTIONS} from '../Actions/UserActions';

const initialState = {
  loginRequested: false,
  jwtToken: 'foo'
}

const userReducer = (state = initialState, action)=> {
  
  switch(action.type){
    case (USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION):{
      return{
        ...state,
        loginRequested: true,
      }
    }
    default:
      return state;
  }
}

export default userReducer;