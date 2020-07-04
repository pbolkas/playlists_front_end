import {PLAYLIST_ACTIONS} from '../Actions'
import _ from 'lodash';
// const initialPlaylistStateDemo = {
//   songs:[
//     {
//       id:1,
//       title:"Malaguena",
//       lengthInSeconds:60,
//       url:"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
//     },
//     {
//       id:2,
//       title:"Entre dos aguas",
//       lengthInSeconds:55,
//       url:"http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
//     },
//     {
//       id:3,
//       title:"Ride of the valkyries",
//       lengthInSeconds:45,
//       url:"http://www.hochmuth.com/mp3/Tchaikovsky_Nocturne__orch.mp3"
//     },
//     {
//       id:4,
//       title:"The mexican hat dance",
//       lengthInSeconds:35,
//       url:"http://www.hochmuth.com/mp3/Beethoven_12_Variation.mp3"
//     }
//   ],
//   playlists:[
//     {
//       id:1,
//       title:"Lounge music"
//     },
//     {
//       id:2,
//       title:"Marianchi music"
//     }
//   ],
//   selectedSong:null
// }

const initialPlaylistState = {
  songs: [],
  playlists: [],
  playlistsLoading: false,
  playlistError: null,
  selectedSong: null,
  playlistAlertContent: null,
}

const playlistReducer = (state = initialPlaylistState, action) =>{
  switch (action.type) {
    case PLAYLIST_ACTIONS.SELECT_SONG :{
      return {
        ...state,
        selectedSong : _.findLast(state.songs,(x)=>{
          return x.id === action.id;
        })
      };
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
    default :{
      return state;
    }
  }
}
export default playlistReducer;