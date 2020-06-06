import { takeLatest, put } from 'redux-saga/effects'
import { USER_ACTIONS } from "../Actions/UserActions";
import { UseLoginResolveAction, UserLoginRejectAction } from "../Actions/UserActions";
import {userLogin as userLoginService} from '../Services/userService';

function * userLogin(action)
{
  try{
    const data = yield userLoginService(action.email, action.password);
    yield put(UseLoginResolveAction(data.data.token, data.data.username));
  }
  catch(e)
  {
    yield put(UserLoginRejectAction());
  }
}

export function* userSagas()
{
  yield takeLatest(USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION,userLogin);
}