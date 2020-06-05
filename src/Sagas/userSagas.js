import { takeLatest } from 'redux-saga/effects'
import { USER_ACTIONS } from "../Actions/UserActions";

function * userLogin(action)
{
  // make login call to api
}

export function* userSagas()
{
  yield takeLatest(USER_ACTIONS.USER_LOGIN_REQUESTED_ACTION,userLogin);
}