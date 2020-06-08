import {takeLatest, put} from 'redux-saga/effects';
import { PLAYLIST_ACTIONS, getAllPlaylistsRejectAction, getAllPlaylistsResolveAction } from "../Actions/PlaylistActions";

function* getPlaylists(action)
{
  try
  {
    const playlists = yield ;
    yield put(getAllPlaylistsResolveAction(playlists));
  }
  catch(e)
  {
    yield put(getAllPlaylistsRejectAction());
  }
}

export function* playlistSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION, getPlaylists);
}