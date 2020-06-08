import { all } from 'redux-saga/effects';
import { userSagas } from './userSagas';
import {playlistSagas} from './playlistSagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    playlistSagas(),
  ]);
}
