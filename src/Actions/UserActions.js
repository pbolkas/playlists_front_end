export const USER_ACTIONS = {
  USER_LOGIN_REQUESTED_ACTION : 'USER_LOGIN_REQUESTED_ACTION',
  USER_LOGIN_RESOLVED_ACTION : 'USER_LOGIN_RESOLVED_ACTION',
  USER_LOGIN_REJECTED_ACTION : 'USER_LOGIN_REJECTED_ACTION',
  TOKEN_REFRESH_REQUESTED_ACTION : 'TOKEN_REFRESH_REQUESTED_ACTION',
  TOKEN_REFRESH_RESOLVED_ACTION : 'TOKEN_REFRESH_RESOLVED_ACTION',
  TOKEN_REFRESH_REJECTED_ACTION : 'TOKEN_REFRESH_REJECTED_ACTION',
  USER_LOGOUT_REQUEST_ACTION : 'USER_LOGOUT_REQUEST_ACTION'
}

export const UserLoginRequestAction = (email, password) => {
  return {
      type: USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION,
      email,
      password
    }
};

export const UseLoginResolveAction = (jwtToken, username) =>{
  return {
    type: USER_ACTIONS.USER_LOGIN_RESOLVED_ACTION,
    jwtToken,
    username
  }
};

export const UserLoginRejectAction = () =>{
  return {
    type: USER_ACTIONS.USER_LOGIN_REJECTED_ACTION
  }
}

export const UserRefreshTokenAction = () => ({
  type: USER_ACTIONS.TOKEN_REFRESH_REQUESTED_ACTION,
});

export const UserLogoutRequestAction = () => {
  return{
    type: USER_ACTIONS.USER_LOGOUT_REQUEST_ACTION,
  }
};