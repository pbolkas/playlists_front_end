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