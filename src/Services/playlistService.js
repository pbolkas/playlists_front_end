import axios from 'axios';

export const getPlaylists = (token) =>{
  return axios.get(
    "https://localhost:5001/api/playlists",
    { 
      "headers" :
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}