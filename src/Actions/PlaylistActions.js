export const PLAYLIST_ACTIONS = {
  PLAYLISTS_GET_REQUESTED_ACTION : 'PLAYLISTS_GET_REQUESTED_ACTION',
  PLAYLISTS_GET_RESOLVED_ACTION : 'PLAYLISTS_GET_RESOLVED_ACTION',
  PLAYLISTS_GET_REJECTED_ACTION : 'PLAYLISTS_GET_REJECTED_ACTION',
  ONE_PLAYLIST_GET_REQUESTED_ACTION : 'ONE_PLAYLIST_GET_REQUESTED_ACTION',
  ONE_PLAYLIST_GET_RESOLVED_ACTION : 'ONE_PLAYLIST_GET_RESOLVED_ACTION',
  ONE_PLAYLIST_GET_REJECTED_ACTION : 'ONE_PLAYLIST_GET_REJECTED_ACTION',
  SELECT_SONG : 'SELECT_SONG',
  ALL_SONGS_REQUESTED : 'ALL_SONGS_REQUESTED',
  ALL_SONGS_RESOLVED : 'ALL_SONGS_RESOLVED',
  ALL_SONGS_REJECTED: 'ALL_SONGS_REJECTED',
  ADD_PLAYLIST_REUQESTED : 'ADD_PLAYLIST_REQUESTED',
  ADD_PLAYLIST_RESOLVED : 'ADD_PLAYLIST_RESOLVED' ,
  ADD_PAYLIST_REJECTED : 'ADD_PLAYLIST_REJECTED',
  EDIT_PLAYLIST_NAME_REQUESTED: 'EDIT_PLAYLIST_NAME_REQUESTED',
  EDIT_PLAYLIST_NAME_RESOLVED : 'EDIT_PLAYLIST_NAME_RESOLVED',
  EDIT_PLAYLIST_NAME_REJECTED : 'EDIT_PLAYLIST_NAME_REJECTED',
  CLEAR_ADD_ERROR : 'CLEAR_ADD_ERROR'
}

export const getAllPlaylistsRequestAction = () => {
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION
  }
}

export const getAllPlaylistsRejectAction = (error) => {
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_REJECTED_ACTION,
    error
  }
}

export const getAllPlaylistsResolveAction = (playlists) => {
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_RESOLVED_ACTION,
    playlists
  }
}

export const addPlaylistRequestAction = (title) => {
  return {
    type: PLAYLIST_ACTIONS.ADD_PLAYLIST_REUQESTED,
    title
   }
}

export const haveAddErrorClearAction = () => {
  return {
    type: PLAYLIST_ACTIONS.CLEAR_ADD_ERROR
  }
}

export const addPlaylistResolveAction = (playlist) => {
  return {
    type: PLAYLIST_ACTIONS.ADD_PLAYLIST_RESOLVED,
    playlist
  }
}

export const addPlaylistRejectAction = (error) => {
  return {
    type: PLAYLIST_ACTIONS.ADD_PAYLIST_REJECTED,
    error
  }
}

export const getPlaylistRequestAction = (playlistId, token) => {

}

export const setSelectedSong = (id)=>{
  return {
    type: PLAYLIST_ACTIONS.SELECT_SONG,
    id
  }
}

export const editPlaylistNameRequest = (newTitle, id) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REQUESTED,
    newTitle,
    id
  }
}

export const editPlaylistNameRejected = (err) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REJECTED,
    err
  }
}

export const editPlaylistNameResolved = (playlist) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_RESOLVED,
    playlist,
  }
}