import {PLAYLIST_ACTIONS} from '../Actions'

const initialPlaylistState = {
  songs: [],
  playlists: [],
  playlistsLoading: false,
  playlistError: null,
  selectedSong: null,
  songIsLoading : false,
  playlistAlertContent: null,
}

const playlistReducer = (state = initialPlaylistState, action) =>{
  switch (action.type) {
    case PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION :{
      return {
        ...state,
        songIsLoading: true,
        selectedSong: null,
      };
    }
    case PLAYLIST_ACTIONS.SELECT_SONG_RESOLVED_ACTION : {
      return {
        ...state,
        songIsLoading: false,
        selectedSong: action.song,
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION :{
      return {
        ...state,
        playlistsLoading : true
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_RESOLVED_ACTION :{
      return {
        ...state,
        playlists : action.playlists,
        playlistsLoading: false,
        playlistError : null,
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_REJECTED_ACTION :{
      return {
        ...state,
        playlistsLoading : false,
        playlistError : action.error,
        playlists : []
      }
    }
    case PLAYLIST_ACTIONS.ADD_PLAYLIST_REUQESTED : {
      return {
        ...state,
        playlistAlertContent: null
      }
    }
    case PLAYLIST_ACTIONS.ADD_PLAYLIST_RESOLVED : {
      return {
        ...state,
        playlists : [...state.playlists, action.playlist],
        playlistAlertContent: null
      }
    }
    case PLAYLIST_ACTIONS.ADD_PAYLIST_REJECTED : {
      return {
        ...state,
        playlistAlertContent : action.error
      }
    }
    case PLAYLIST_ACTIONS.REMOVE_PLAYLIST_REJECTED : {
      return {
        ...state,
        playlistAlertContent : action.error
      }
    }
    case PLAYLIST_ACTIONS.CLEAR_ALERT_ERROR : {
      return {
        ...state,
        playlistAlertContent: null,
      }
    }
    case PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_RESOLVED : {
      return {
        ...state,
        playlists : state.playlists.map((playlist)=>{
          playlist.title = playlist.id === action.playlist.songId ? action.playlist.newTitle : playlist.title;
          return playlist;
        }),
      }
    }
    case PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REJECTED : {
      return {
        ...state,
        playlistAlertContent : action.error
      }
    }
    case PLAYLIST_ACTIONS.REMOVE_PLAYLIST_RESOLVED :{
      return {
        ...state,
        playlists : state.playlists.filter( (item) => ( item.id !== action.id ) )
      }
    }
    case PLAYLIST_ACTIONS.LOAD_SONGS_REQUESTED_ACTION : {
      const selectedPlaylist = state.playlists.find((list)=>list.id === action.id);
      return {
        ...state,
        songs : selectedPlaylist.songs,            
      }
    }
    default :{
      return state;
    }
  }
}
export default playlistReducer;