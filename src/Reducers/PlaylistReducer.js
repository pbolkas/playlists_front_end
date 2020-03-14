import {PLAYLIST_ACTIONS} from '../Actions'
import _ from 'lodash';
const initialPlaylistState = {
  songs:[
    {
      id:1,
      Title:"Malaguena",
      LengthInSeconds:60,
      url:"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    },
    {
      id:2,
      Title:"Entre dos aguas",
      LengthInSeconds:55,
      url:"http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    },
    {
      id:3,
      Title:"Ride of the valkyries",
      LengthInSeconds:45,
      url:"http://www.hochmuth.com/mp3/Tchaikovsky_Nocturne__orch.mp3"
    },
    {
      id:4,
      Title:"The mexican hat dance",
      LengthInSeconds:35,
      url:"http://www.hochmuth.com/mp3/Beethoven_12_Variation.mp3"
    }
  ],
  playlists:[
    {
      id:1,
      title:"Playlist 1"
    },
    {
      id:2,
      title:"Playlist 2"
    }
  ],
  selectedSong:null
}

const playlistReducer = (state = initialPlaylistState, action) =>{
  switch (action.type) {
    case PLAYLIST_ACTIONS.SELECT_SONG:{
      return {
        ...state,
        selectedSong: _.findLast(state.songs,(x)=>{
          return x.id === action.id;
        })
      };
    }
    default:{
      return state;
    }
  }
}
export default playlistReducer;