export const SONG_ACTIONS = {
  SONG_ADD_REQUESTED_ACTION : 'SONG_ADD_REQUESTED_ACTION',
  SONG_ADD_RESOLVED_ACTION : 'SONG_ADD_RESOLVED_ACTION',
  SONG_ADD_REJECTED_ACTION : 'SONG_ADD_REJECTED_ACTION',
  SONG_REMOVE_REQUESTED_ACTION : 'SONG_REMOVE_REQUESTED_ACTION',
  SONG_REMOVE_RESOLVED_ACTION: 'SONG_REMOVE_RESOLVED_ACTION',
  SONG_REMOVE_REJECTED_ACTON: 'SONG_REMOVE_REJECTED_ACTIONS',
  SONG_EDIT_REQUESTED_ACTION : 'SONG_EDIT_REQUESTED_ACTION',
  SONG_EDIT_RESOLVED_ACTON: 'SONG_EDIT_RESOLVED_ACTIONS',
  SONG_EDIT_REJECTED_ACTON: 'SONG_EDIT_REJECTED_ACTIONS',
}

export const addSongRequestAction = (title, playlistId, bytes) => {
  return {
    type: SONG_ACTIONS.SONG_ADD_REQUESTED_ACTION,
    title,
    playlistId,
    bytes
  }
}

export const addSongRejectAction = (error) => {
  return {
    type: SONG_ACTIONS.SONG_ADD_REJECTED_ACTION,
    error
  }
}

export const addSongResolveAction = (newSong) => {
  
  return {
    type: SONG_ACTIONS.SONG_ADD_RESOLVED_ACTION,
    newSong
  }
}

export const editSongRequestAction = (title, songId, bytes) => {
  return {
    type: SONG_ACTIONS.SONG_EDIT_REQUESTED_ACTION,
    title,
    songId,
    bytes
  }
}

export const editSongRejectAction = (error) => {
  return {
    type: SONG_ACTIONS.SONG_EDIT_REJECTED_ACTION,
    error
  }
}

export const editSongResolveAction = () => {
  return {
    type: SONG_ACTIONS.SONG_EDIT_RESOLVED_ACTION,
  }
}

export const removeSongRequestAction = (songId, playlistId) => {
  return {
    type: SONG_ACTIONS.SONG_REMOVE_REQUESTED_ACTION,
    songId,
    playlistId
  }
}

export const removeSongRejectAction = (error) => {
  return {
    type: SONG_ACTIONS.SONG_REMOVE_REJECTED_ACTION,
    error
  }
}

export const removeSongResolveAction = (songId) => {
  return {
    type: SONG_ACTIONS.SONG_REMOVE_RESOLVED_ACTION,
    songId
  }
}