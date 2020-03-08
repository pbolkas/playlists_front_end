export const PLAYER_ACTIONS = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
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