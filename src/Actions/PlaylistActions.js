export const PLAYLIST_ACTIONS = {
  PLAYLISTS_GET_REQUESTED_ACTION : 'PLAYLISTS_GET_REQUESTED_ACTION',
  PLAYLISTS_GET_RESOLVED_ACTION : 'PLAYLISTS_GET_RESOLVED_ACTION',
  PLAYLISTS_GET_REJECTED_ACTION : 'PLAYLISTS_GET_REJECTED_ACTION',
  SELECT_SONG : 'SELECT_SONG',
  ALL_SONGS_REQUEST : 'ALL_SONGS_REQUEST',
  ALL_SONGS_RESOLVE : 'ALL_SONGS_RESOLVE',
  ALL_SONGS_REJECT: 'ALL_SONGS_RESOLVE',
}

export const getAllPlaylistsRequestAction = () =>{
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION
  }
}

export const getAllPlaylistsRejectAction = () =>{
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_REJECTED_ACTION
  }
}

export const getAllPlaylistsResolveAction = (playlists) =>{
  return {
    type: PLAYLIST_ACTIONS.PLAYLISTS_GET_RESOLVED_ACTION,
    playlists
  }
}

export const setSelectedSong = (id)=>{
  return {
    type: PLAYLIST_ACTIONS.SELECT_SONG,
    id
  }
}