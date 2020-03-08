export const PLAYER_ACTIONS = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  DURATION : 'DURATION',
  END: 'END'
}

export const playAction= ()=>{
  return {
    type: PLAYER_ACTIONS.PLAY,
  }
}

export const pauseAction = ()=>{
  return {
    type: PLAYER_ACTIONS.PAUSE,
  }
}

export const songEndedAction = ()=>{
  return {
    type:PLAYER_ACTIONS.END
  }
}

export const setDurationAction = (seconds)=>{
  return {
    type: PLAYER_ACTIONS.DURATION,
    duration : seconds
  }
}