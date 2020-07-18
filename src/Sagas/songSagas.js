import { takeLatest, select, put } from "redux-saga/effects";
import { PLAYLIST_ACTIONS, selectSongResolveAction } from "../Actions";
import { jwtTokenSelector } from "../Selectors/userSelector";
import { fetchSongService } from "../Services/songService";


function * select_song(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const result = yield fetchSongService(action.id, jwtToken);

    const base64 = result.data.fileContents;
    
    var songBytes = base64ToArrayBuffer(base64);

    var blob = new Blob([songBytes], {type:'audio/mpga'});
    var url = window.URL.createObjectURL(blob)
    // window.audio = new Audio();
    // window.audio.src = url;
    // window.audio.play();
           
    yield put(selectSongResolveAction(url));
  }
  catch(e)
  {
    // yield put(removePlaylistRejectedAction("error while removing the playlist"));
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