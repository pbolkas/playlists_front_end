import {PLAYER_ACTIONS} from '../Actions'

const initialPlayerState = {
  song: '',
  playing: false,
}

const playerReducer = (state = initialPlayerState, action) =>{
  switch (action.type) {
    case PLAYER_ACTIONS.PLAY :{
      return {
        ...state,
        playing: !state.playing
      }
    }
    case PLAYER_ACTIONS.PAUSE:{
      return{
        ...state,
        playing: !state.playing,
      }
    }
    default:{
      return state;
    }
  }
}
export default playerReducer;