import {takeLatest, put, select} from 'redux-saga/effects';
import { PLAYLIST_ACTIONS, getAllPlaylistsRejectAction, getAllPlaylistsResolveAction, addPlaylistResolveAction, addPlaylistRejectAction } from "../Actions/PlaylistActions";
import {getPlaylists as getAllPlaylists, addNewPlaylistService} from '../Services/playlistService';
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

function * addPlaylist(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const playlist = yield addNewPlaylistService(action.title, jwtToken);
    yield put(addPlaylistResolveAction(playlist.data))
  }
  catch(e)
  {
    yield put(addPlaylistRejectAction("error while adding new playlist"));
  }
}

export function* playlistSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION, getPlaylists);
  yield takeLatest(PLAYLIST_ACTIONS.ADD_PLAYLIST_REUQESTED, addPlaylist);
}