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

export const removeSongService = (songId, playlistId, token) => {

  return axios.delete(
    `${HOST}/Song`,
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
    `${HOST}/Song`,
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