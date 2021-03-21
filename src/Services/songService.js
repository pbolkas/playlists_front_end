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
        Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIlVzZXIiLCJVc2VyIl0sInVzZXJuYW1lIjoiZm9vQmFyIiwidXVpZCI6IjhjNzkyZDQ3LTIwNDQtNGFkYS1iNTZjLTdmOWMyZGVkYjhhYSIsIm5iZiI6MTYxNjM1Mjg1NiwiZXhwIjoxNjE2Mzg1MjU2LCJpYXQiOjE2MTYzNTI4NTZ9.h-y_WpBeOBu4YtZNd5wrMiQ_3xT9MWGDG8jmY8A0vZE`
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
      "headers":
      {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      }
    }
  )
}