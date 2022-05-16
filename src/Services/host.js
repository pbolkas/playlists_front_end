export const HOST = process.env.NODE_ENV === "production" ?
  process.env.REACT_APP_API_HOST_PRODUCTION :
  process.env.REACT_APP_API_HOST_DEV;

export const PEER_HOST = process.env.NODE_ENV === "production" ?
  process.env.REACT_APP_PEER_HOST_PRODUCTION :
  process.env.REACT_APP_PEER_HOST_DEV;