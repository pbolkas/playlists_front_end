import { takeLatest } from "redux-saga/effects";
import { LIVE_SHARE_ACTIONS } from "../Actions/LiveShareActions";
import * as PeerService from "../Services/peerService";

function* enableLiveShare(action) {
  
}

export function* liveShareSagas() {
  yield takeLatest(LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REQUEST, enableLiveShare);
}