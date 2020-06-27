import axios from 'axios';

const HOST = "https://localhost:5001/api";


export const getPlaylists = (token) =>{
  return axios.get(
    `${HOST}/playlists`,
    { 
      "headers" :
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}

export const addNewPlaylistService = (title, token) =>{
  return axios.post(
    `${HOST}/playlists`,
    {
      "title" : title
    },
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}

export const editPlaylistTitleService = (newTitle, id, token) => {
  return axios.put(
    `${HOST}/playlists`,
    {
      id,
      newTitle
    },
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}