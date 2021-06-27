export const HOST = process.env.NODE_ENV === "production" ?
  process.env.REACT_APP_API_HOST_PRODUCTION :
  process.env.REACT_APP_API_HOST_DEV;
  