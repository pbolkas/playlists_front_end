import {PLAYLIST_ACTIONS} from '../Actions'
import _ from 'lodash';
const initialPlaylistState = {
  songs:[
    {
      id:1,
      title:"Malaguena",
      lengthInSeconds:60,
      url:"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    },
    {
      id:2,
      title:"Entre dos aguas",
      lengthInSeconds:55,
      url:"http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    },
    {
      id:3,
      title:"Ride of the valkyries",
      lengthInSeconds:45,
      url:"http://www.hochmuth.com/mp3/Tchaikovsky_Nocturne__orch.mp3"
    },
    {
      id:4,
      title:"The mexican hat dance",
      lengthInSeconds:35,
      url:"http://www.hochmuth.com/mp3/Beethoven_12_Variation.mp3"
    }
  ],
  playlists:[
    {
      id:1,
      title:"Lounge music"
    },
    {
      id:2,
      title:"Marianchi music"
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