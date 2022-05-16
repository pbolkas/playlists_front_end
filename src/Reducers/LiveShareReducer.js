import { LIVE_SHARE_ACTIONS } from "../Actions/LiveShareActions";


const initialLiveShareState = {
  myId: null,
  liveShareEnabled: false
}

const liveShareReducer = ( state = initialLiveShareState, action) => {
  switch(action.type){
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REQUEST) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_RESOLVE) : {
      return {
        ...state,
        liveShareEnabled : true,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REJECT) :{
      return {
        ...state,
        error: action.error,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_REQUEST) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_RESOLVE) : {
      return {
        ...state,
        liveShareEnabled : false,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_REJECT) : {
      return {
        ...state,
        error: action.error,
      }
    }
    case (LIVE_SHARE_ACTIONS.PEER_ID_REQUEST) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.PEER_ID_RESOLVE) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.PEER_ID_REJECT) : {
      return {
        ...state,
        error: action.error
      }
    }
    default:{
      return state;
    }
  }
}

export default liveShareReducer;