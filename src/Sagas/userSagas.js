import { takeLatest } from 'redux-saga/effects'
import { USER_ACTIONS } from "../Actions/UserActions";
import {userLogin as userLoginService} from '../Services/userService';
function * userLogin(action)
{
  try{
    const data = yield userLoginService(action.email, action.password);
    console.log(data);
  }catch(e)
  {

  }

}

export function* userSagas()
{
  yield takeLatest(USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION,userLogin);
}