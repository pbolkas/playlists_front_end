import { takeLatest, put } from 'redux-saga/effects'
import { UserSubscribeRejected, UserSubscribeResolved, USER_ACTIONS } from "../Actions/UserActions";
import { UseLoginResolveAction, UserLoginRejectAction } from "../Actions/UserActions";
import {userLogin as userLoginService, userSubscribeService} from '../Services/userService';

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

function * userSubscribe(action)
{
  try{
    const result = yield(userSubscribeService(action.email, action.password))
    yield put(UserSubscribeResolved());
  }catch(e)
  {
    yield put(UserSubscribeRejected())
  }
}

export function* userSagas()
{
  yield takeLatest(USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION, userLogin);
  yield takeLatest(USER_ACTIONS.USER_SUBSCRIBE_REQUESTED_ACTION, userSubscribe);
}