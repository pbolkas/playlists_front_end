import {takeLatest, put, select} from 'redux-saga/effects';
import { PLAYLIST_ACTIONS, getAllPlaylistsRejectAction, getAllPlaylistsResolveAction, addPlaylistResolveAction, addPlaylistRejectAction, editPlaylistNameRejected, editPlaylistNameResolved } from "../Actions/PlaylistActions";
import {getPlaylists as getAllPlaylists, addNewPlaylistService, editPlaylistTitleService} from '../Services/playlistService';
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

function * editPlaylist(action)
{
  const jwtToken = yield select(jwtTokenSelector);
  try
  {
    const playlist = yield editPlaylistTitleService(action.newTitle, action.id, jwtToken);
    yield put(editPlaylistNameResolved(playlist.data));
  }
  catch(e)
  {
    yield put(editPlaylistNameRejected("error while editing the title"));
  }
}

export function* playlistSagas()
{
  yield takeLatest(PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION, getPlaylists);
  yield takeLatest(PLAYLIST_ACTIONS.ADD_PLAYLIST_REUQESTED, addPlaylist);
  yield takeLatest(PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REQUESTED, editPlaylist);
}
