import {PLAYLIST_ACTIONS} from '../Actions'

const initialPlayerState = {
  songs:[
    {
      "id":1,
      "Title":"Malaguena",
      "LengthInSeconds":60,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    },
    {
      "id":2,
      "Title":"Entre dos aguas",
      "LengthInSeconds":55,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3"
    },
    {
      "id":3,
      "Title":"Ride of the valkyries",
      "LengthInSeconds":45,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3"
    },
    {
      "id":4,
      "Title":"The mexican hat dance",
      "LengthInSeconds":35,
      "url":"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3"
    }
  ],
  selectedSong:null
}

const playlistReducer = (state = initialPlayerState, action) =>{
  switch (action.type) {
    case PLAYLIST_ACTIONS.SELECT_SONG:{
      return state;
    }
    default:{
      return state;
    }
  }
}
export default playlistReducer;