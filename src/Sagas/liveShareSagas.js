import { put, takeLatest } from "redux-saga/effects";
import { liveShareEnableRejectAction, liveShareEnableResolveAction, LIVE_SHARE_ACTIONS } from "../Actions/LiveShareActions";
import { getAudioStream, setAudioStream } from "../Components/Audio/AudioPlayer";
import * as PeerService from "../Services/peerService";


function* enableLiveShare(action) {
  let stream = yield getAudioStream();

  if(stream != null) {
    yield put(liveShareEnableResolveAction(stream));
  } else {
    yield put(liveShareEnableRejectAction("error"));
  }
}

function* listenToLiveShare(action) {
  yield PeerService.joinLiveShareId(action.peerId, setAudioStream);
}

export function* liveShareSagas() {
  yield takeLatest(LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REQUEST, enableLiveShare);
  yield takeLatest(LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REQUEST, listenToLiveShare);
}