export const PLAYLIST_ACTIONS = {
  PLAYLISTS_GET_REQUESTED_ACTION : 'PLAYLISTS_GET_REQUESTED_ACTION',
  PLAYLISTS_GET_RESOLVED_ACTION : 'PLAYLISTS_GET_RESOLVED_ACTION',
  PLAYLISTS_GET_REJECTED_ACTION : 'PLAYLISTS_GET_REJECTED_ACTION',
  ONE_PLAYLIST_GET_REQUESTED_ACTION : 'ONE_PLAYLIST_GET_REQUESTED_ACTION',
  ONE_PLAYLIST_GET_RESOLVED_ACTION : 'ONE_PLAYLIST_GET_RESOLVED_ACTION',
  ONE_PLAYLIST_GET_REJECTED_ACTION : 'ONE_PLAYLIST_GET_REJECTED_ACTION',
  SELECT_SONG_REQUESTED_ACTION : 'SELECT_SONG_REQUESTED_ACTION',
  SELECT_SONG_RESOLVED_ACTION : 'SELECT_SONG_RESOLVED_ACTION',
  SELECT_SONG_REJECTED_ACTION : 'SELECT_SONG_REJECTED_ACTION',
  ALL_SONGS_REQUESTED : 'ALL_SONGS_REQUESTED',
  ALL_SONGS_RESOLVED : 'ALL_SONGS_RESOLVED',
  ALL_SONGS_REJECTED: 'ALL_SONGS_REJECTED',
  ADD_PLAYLIST_REUQESTED : 'ADD_PLAYLIST_REQUESTED',
  ADD_PLAYLIST_RESOLVED : 'ADD_PLAYLIST_RESOLVED' ,
  ADD_PAYLIST_REJECTED : 'ADD_PLAYLIST_REJECTED',
  EDIT_PLAYLIST_NAME_REQUESTED: 'EDIT_PLAYLIST_NAME_REQUESTED',
  EDIT_PLAYLIST_NAME_RESOLVED : 'EDIT_PLAYLIST_NAME_RESOLVED',
  EDIT_PLAYLIST_NAME_REJECTED : 'EDIT_PLAYLIST_NAME_REJECTED',
  REMOVE_PLAYLIST_REQUESTED : 'REMOVE_PLAYLIST_REQUESTED',
  REMOVE_PLAYLIST_RESOLVED : 'REMOVE_PLAYLIST_RESOLVED',
  REMOVE_PLAYLIST_REJECTED : 'REMOVE_PLAYLIST_REJECTED',
  LOAD_SONGS_REQUESTED_ACTION : 'LOAD_SONGS_REQUESTED_ACTION',
  LOAD_SONGS_RESOLVED_ACTION : 'LOAD_SONGS_RESOLVED_ACTION',
  LOAD_SONGS_REJECTED_ACTION : 'LOAD_SONGS_REJECTED_ACTION',
  CLEAR_ALERT_ERROR : 'CLEAR_ALERT_ERROR',

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

export const clearAlertErrorAction = () => {
  return {
    type: PLAYLIST_ACTIONS.CLEAR_ALERT_ERROR
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

export const editPlaylistNameRequestAction = (newTitle, id) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REQUESTED,
    newTitle,
    id
  }
}

export const editPlaylistNameRejectedAction = (error) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REJECTED,
    error
  }
}

export const editPlaylistNameResolvedAction = (playlist) => {
  return {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_RESOLVED,
    playlist,
  }
}

export const removePlaylistRequestedAction = (id) => {
  return {
    type: PLAYLIST_ACTIONS.REMOVE_PLAYLIST_REQUESTED,
    id
  }
}

export const removePlaylistResolvedAction = (id) => ({
  type:PLAYLIST_ACTIONS.REMOVE_PLAYLIST_RESOLVED,
  id
})

export const removePlaylistRejectedAction = (error) => ({
  type: PLAYLIST_ACTIONS.REMOVE_PLAYLIST_REJECTED,
  error
})

export const loadSongsRequestedAction = (id) => ({
  type: PLAYLIST_ACTIONS.LOAD_SONGS_REQUESTED_ACTION,
  id
})

export const selectSongResolveAction = (url) => {
  return {
    type: PLAYLIST_ACTIONS.SELECT_SONG_RESOLVED_ACTION,
    url
  }
}
  
export const setSelectedSong = (id) => {
  return {
    type: PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION,
    id
  }
}