import axios from 'axios';
import {HOST} from "./host"

export const fetchSongService = (id, token) => {
  return axios.get(
    `${HOST}/api/Song/${id}`,
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}

export const removeSongService = (songId, playlistId, token) => {

  return axios.delete(
    `${HOST}/api/Song`,
    {
      data: 
      {
        playlistId,
        songId
      },
      headers:
      {
        Authorization : `Bearer ${token}`
      }
    
    });
}

export const addSongService = (title, playlistId, bytes, token) => {

  let formData = new FormData();
  formData.append("SongBytes", bytes);
  formData.append("PlaylistId", playlistId);
  formData.append("SongTitle", title);

  return axios.post(
    `${HOST}/api/Song`,
    formData,
    {
      headers:
      {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': `multipart/form-data`
      }
    }
  )
}