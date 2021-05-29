import axios from 'axios';
import {HOST} from "./host"

export const getPlaylists = (token) =>{
  return axios.get(
    `${HOST}/api/playlists`,
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
    `${HOST}/api/playlists`,
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
    `${HOST}/api/playlists`,
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

export const removePlaylistService = (id, token) => {
  return axios.delete(
    `${HOST}/api/playlists/${id}`,
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}