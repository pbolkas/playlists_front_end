import axios from 'axios';

const HOST = "https://localhost:5001/api";

export const fetchSongService = (id, token) => {
  return axios.get(
    `${HOST}/Song/${id}`,
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`
      }
    }
  )
}

export const addSongService = (title, playlistId, bytes, token) => {
  return axios.post(
    `${HOST}/Song`,
    {
      "SongTitle" : title,
      "PlaylistId" : playlistId,
      "SongBytes" : bytes
    },
    {
      "headers":
      {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : `multipart/form-data`
      }
    }
  )
}