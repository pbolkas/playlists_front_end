import { all } from 'redux-saga/effects';
import { userSagas } from './userSagas';
import {playlistSagas} from './playlistSagas';
import {songSagas} from './songSagas';
import {liveShareSagas} from './liveShareSagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    playlistSagas(),
    songSagas(),
    liveShareSagas(),
  ]);
}
