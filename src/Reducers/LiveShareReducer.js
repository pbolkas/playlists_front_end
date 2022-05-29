import { LIVE_SHARE_ACTIONS } from "../Actions/LiveShareActions";
import { initAnswer, peerDisconnect, PEER_STATUS } from "../Services/peerService";


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
      let stream = action.stream;
      let statusOfBroadcastStream = initAnswer(stream) === PEER_STATUS.CONNECTION_FAILED? false : true;

      return {
        ...state,
        liveShareEnabled : statusOfBroadcastStream,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REJECT) :{
      return {
        ...state,
        error: action.error,
      }
    }
    case (LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_REQUEST) : {
      peerDisconnect();
      return {
        ...state,
        liveShareEnabled: false,
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
    case (LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REQUEST) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_RESOLVE) : {
      return {
        ...state,
      }
    }
    case (LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REJECT) : {
      return {
        ...state,
      }
    }
    default:{
      return state;
    }
  }
}

export default liveShareReducer;