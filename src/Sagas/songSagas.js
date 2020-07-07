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
    console.log(result);
    // yield put(selectSongResolveAction());
  }
  catch(e)
  {
    // yield put(removePlaylistRejectedAction("error while removing the playlist"));
  }
}

export function* songSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION, select_song);
  
}