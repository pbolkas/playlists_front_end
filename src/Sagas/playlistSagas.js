import {takeLatest, put, select} from 'redux-saga/effects';
import { PLAYLIST_ACTIONS, getAllPlaylistsRejectAction, getAllPlaylistsResolveAction } from "../Actions/PlaylistActions";
import {getPlaylists as getAllPlaylists} from '../Services/playlistService';
import { jwtTokenSelector } from '../Selectors/userSelector';

function* getPlaylists(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const playlists = yield getAllPlaylists(jwtToken);
    yield put(getAllPlaylistsResolveAction(playlists.data));
  }
  catch(e)
  {
    
    yield put(getAllPlaylistsRejectAction("error_message"));
  }
}

export function* playlistSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION, getPlaylists);
}