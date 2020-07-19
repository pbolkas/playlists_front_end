import { takeLatest, select, put } from "redux-saga/effects";
import { PLAYLIST_ACTIONS, selectSongResolveAction, selectSongRejectedAction } from "../Actions";
import { jwtTokenSelector } from "../Selectors/userSelector";
import { fetchSongService } from "../Services/songService";


function * select_song(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const result = yield fetchSongService(action.id, jwtToken);

    const base64 = result.data.fileContents;
    const songBytes = base64ToArrayBuffer(base64);
    const blob = new Blob([songBytes], {type:'audio/mpga'});
    const url = window.URL.createObjectURL(blob)

    const song = {songTitle : action.title, link: url, id: action.id };

    yield put(selectSongResolveAction(song));
  }
  catch(e)
  {
    yield put(selectSongRejectedAction("error while selecting song"));
  }
}

function base64ToArrayBuffer(base64) {

  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
     var ascii = binaryString.charCodeAt(i);
     bytes[i] = ascii;
  }

  return bytes;
}

export function* songSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION, select_song);
  
}