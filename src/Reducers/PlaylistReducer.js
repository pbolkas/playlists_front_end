import { PLAYLIST_ACTIONS, SONG_ACTIONS } from '../Actions'

const initialPlaylistState = {
  songs: [],
  playlists: [],
  playlistsLoading: false,
  playlistError: null,
  selectedSong: null,
  nextSongId: null,
  previousSongId: null,
  selectedPlaylist: null,
  songIsLoading: false,
  playlistAlertContent: null,
}

const playlistReducer = (state = initialPlaylistState, action) => {
  switch (action.type) {
    case PLAYLIST_ACTIONS.SELECT_SONG_REQUESTED_ACTION: {
      return {
        ...state,
        songIsLoading: true,
        selectedSong: null,
      };
    }
    case PLAYLIST_ACTIONS.SELECT_SONG_RESOLVED_ACTION: {

      const song_idx = state.songs.map((song) => { return song.songId; }).indexOf(action.song.id);
      const next_idx = song_idx === state.songs.length - 1 ? null : state.songs.length === 1 ? null : song_idx + 1;
      const previous_idx = song_idx === 0 ? null : state.songs.length === 1 ? null : song_idx - 1;

      const nextSong = next_idx === null ? null : state.songs.find((song, idx) => idx === next_idx);
      const previousSong = previous_idx === null ? null : state.songs.find((song, idx) => idx === previous_idx);

      return {
        ...state,
        songIsLoading: false,
        selectedSong: action.song,
        nextSong: nextSong,
        previousSong: previousSong,
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_REQUESTED_ACTION: {
      return {
        ...state,
        playlistsLoading: true
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_RESOLVED_ACTION: {
      return {
        ...state,
        playlists: action.playlists,
        playlistsLoading: false,
        playlistError: null,
      }
    }
    case PLAYLIST_ACTIONS.PLAYLISTS_GET_REJECTED_ACTION: {
      return {
        ...state,
        playlistsLoading: false,
        playlistError: action.error,
        playlists: []
      }
    }
    case PLAYLIST_ACTIONS.ADD_PLAYLIST_REUQESTED: {
      return {
        ...state,
        playlistAlertContent: null
      }
    }
    case PLAYLIST_ACTIONS.ADD_PLAYLIST_RESOLVED: {
      return {
        ...state,
        playlists: [...state.playlists, action.playlist],
        playlistAlertContent: null
      }
    }
    case PLAYLIST_ACTIONS.ADD_PAYLIST_REJECTED: {
      return {
        ...state,
        playlistAlertContent: action.error
      }
    }
    case PLAYLIST_ACTIONS.REMOVE_PLAYLIST_REJECTED: {
      return {
        ...state,
        playlistAlertContent: action.error
      }
    }
    case PLAYLIST_ACTIONS.CLEAR_ALERT_ERROR: {
      return {
        ...state,
        playlistAlertContent: null,
      }
    }
    case PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_RESOLVED: {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          playlist.title = playlist.id === action.playlist.songId ? action.playlist.newTitle : playlist.title;
          return playlist;
        }),
      }
    }
    case PLAYLIST_ACTIONS.EDIT_PLAYLIST_NAME_REJECTED: {
      return {
        ...state,
        playlistAlertContent: action.error
      }
    }
    case PLAYLIST_ACTIONS.REMOVE_PLAYLIST_RESOLVED: {
      return {
        ...state,
        selectedPlaylist: action.id === state.selectedPlaylist ? null : state.selectedPlaylist,
        songs: initialPlaylistState.songs,
        playlists: state.playlists.filter((item) => (item.id !== action.id))
      }
    }
    case PLAYLIST_ACTIONS.LOAD_SONGS_REQUESTED_ACTION: {
      const selectedPlaylist = state.playlists.find((list) => list.id === action.id);
      return {
        ...state,
        songs: selectedPlaylist.songs,
        selectedPlaylist: action.id,
        selectedSong: null,
        nextSong: null,
        previousSong: null,
      }
    }
    case SONG_ACTIONS.SONG_REMOVE_RESOLVED_ACTION: {
      // TODO: remove also from "playlist.songs" array
      return {
        ...state,
        songs: state.songs.filter((item) => (item.songId !== action.songId)),
        selectedSong: null
      }
    }
    case SONG_ACTIONS.SONG_ADD_RESOLVED_ACTION: {
      const new_song = { songId: action.newSong.songId, songTitle: action.newSong.songTitle }
      // TODO fix duplicate song bug
      const new_playlists = state.playlists.map( (p) => {
        if(p.id === state.selectedPlaylist)
        {
          p.songs.push(new_song);
        }
        return p;
      })
      return {
        ...state,
        songs: [...state.songs, new_song],
        playlists: new_playlists,
      }
    }
    case PLAYLIST_ACTIONS.CLEAR_STATE_ACTION:{
      return initialPlaylistState;
    }
    default: {
      return state;
    }
  }
}
export default playlistReducer;