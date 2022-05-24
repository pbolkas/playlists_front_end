export const LIVE_SHARE_ACTIONS = {
  LIVE_SHARE_ENABLE_REQUEST : 'LIVE_SHARE_ENABLE_REQUEST',
  LIVE_SHARE_ENABLE_RESOLVE : 'LIVE_SHARE_ENABLE_RESOLVE',
  LIVE_SHARE_ENABLE_REJECT : 'LIVE_SHARE_ENABLE_REJECT',
  LIVE_SHARE_DISABLE_REQUEST : 'LIVE_SHARE_DISABLE_REQUEST',
  LIVE_SHARE_DISABLE_RESOLVE : 'LIVE_SHARE_DISABLE_RESOLVE',
  LIVE_SHARE_DISABLE_REJECT : 'LIVE_SHARE_DISABLE_REJECT',
  PEER_ID_REQUEST : 'PEER_ID_REQUEST',
  PEER_ID_RESOLVE : 'PEER_ID_RESOLVE',
  PEER_ID_REJECT : 'PEER_ID_REJECT',
  SET_PEER_ID : 'SET_PEER_ID',
  LISTEN_BROADCAST_REQUEST : 'LISTEN_BROADCAST_REQUEST',
  LISTEN_BROADCAST_RESOLVE : 'LISTEN_BROADCAST_RESOLVE',
  LISTEN_BROADCAST_REJECT : 'LISTEN_BROADCAST_REJECT'
}

export const liveShareEnableRequestAction = () => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REQUEST
  }
}

export const liveShareEnableRejectAction = (error) => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_REJECT,
    error
  }
}

export const liveShareEnableResolveAction = () => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_ENABLE_RESOLVE
  }
}

export const liveShareDisableRequestAction = () => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_REQUEST
  }
}

export const liveShareDisableRejectAction = (error) => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_REJECT,
    error
  }
}

export const liveShareDisableResolveAction = () => {
  return {
    type: LIVE_SHARE_ACTIONS.LIVE_SHARE_DISABLE_RESOLVE
  }
}

export const peerIdRequestAction = () => {
  return {
    type: LIVE_SHARE_ACTIONS.PEER_ID_REQUEST
  }
}

export const peerIdRejectAction = (error) => {
  return {
    type: LIVE_SHARE_ACTIONS.PEER_ID_REJECT,
    error,
  }
}

export const peerIdResolveAction = (peerId) => {
  return {
    type: LIVE_SHARE_ACTIONS.PEER_ID_RESOLVE,
    peerId,
  }
}

export const setPeerIdAction = (peerId) => {
  return {
    type: LIVE_SHARE_ACTIONS.SET_PEER_ID,
    peerId,
  }
}

export const listenBroadcastRequest = (remotePeerId) => {
  return {
    type: LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REQUEST,
    peerId : remotePeerId
  }
}

export const listenBroadcastReject = (error) => {
  return {
    type: LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REQUEST,
    error
  }
}

export const listenBroadcastResolve = (stream) => {
  return {
    type: LIVE_SHARE_ACTIONS.LISTEN_BROADCAST_REQUEST,
    stream
  }
}