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

    const bytes = result.data.fileContents;
    
    var songBytes = new Buffer(bytes, 'base64').toString('ascii');

    var blob = new Blob([songBytes], {type:'audio/mpga'});
       
    yield put(selectSongResolveAction("url"));
  }
  catch(e)
  {
    // yield put(removePlaylistRejectedAction("error while removing the playlist"));
  }
}

function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

export function* songSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION, select_song);
  
}