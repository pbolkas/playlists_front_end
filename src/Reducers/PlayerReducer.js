import {PLAYER_ACTIONS} from '../Actions'

const initialPlayerState = {
  song: '',
  playing: false,
  duration: 0,
  ended: true,
}

const playerReducer = (state = initialPlayerState, action) =>{
  switch (action.type) {
    case PLAYER_ACTIONS.PLAY :{
      return {
        ...state,
        playing: !state.playing,
        ended: false,
      }
    }
    case PLAYER_ACTIONS.PAUSE:{
      return{
        ...state,
        playing: !state.playing,
      }
    }
    case PLAYER_ACTIONS.DURATION:{
      return{
        ...state,
        duration:action.duration
      }
    }
    case PLAYER_ACTIONS.END:{
      return {
        ...state,
        ended: true,
      }
    }
    case PLAYER_ACTIONS.CLEAR_PLAYER:{
      return initialPlayerState;
    }
    default:{
      return state;
    }
  }
}
export default playerReducer;