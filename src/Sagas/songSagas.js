import { takeLatest, select, put } from "redux-saga/effects";
import { PLAYLIST_ACTIONS, selectSongResolveAction, selectSongRejectedAction, SONG_ACTIONS, removeSongResolveAction, addSongResolveAction } from "../Actions";
import { jwtTokenSelector } from "../Selectors/userSelector";
import { addSongService, fetchSongService, removeSongService } from "../Services/songService";


function * select_song(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const result = yield fetchSongService(action.id, jwtToken);

    const base64 = result.data.fileContents;
    const songBytes = base64ToArrayBuffer(base64);
    const blob = new Blob([result.data.fileContents], {type:'audio/mpga'});
    const url = window.URL.createObjectURL(blob)

    const song = {songTitle : action.title, link: url, id: action.id };

    yield put(selectSongResolveAction(song));
  }
  catch(e)
  {
    yield put(selectSongRejectedAction("error while selecting song"));
  }
}

function * uploadSong(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try 
  {
    
    const result = yield addSongService(action.title, action.playlistId, action.bytes, jwtToken);
    let newSong = result.data;
    yield put(addSongResolveAction(newSong))
    
  }
  catch (e)
  {

  }
}

function * removeSong(action) {
  const jwtToken = yield select(jwtTokenSelector);
  try 
  {
    const result = yield removeSongService( action.songId, action.playlistId, jwtToken);
    yield put(removeSongResolveAction(action.songId));

  }
  catch (e)
  {

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
  yield takeLatest(SONG_ACTIONS.SONG_ADD_REQUESTED_ACTION, uploadSong);
  yield takeLatest(SONG_ACTIONS.SONG_REMOVE_REQUESTED_ACTION, removeSong);
  
}