import axios from 'axios';

export const userLogin = (email,password) =>{
  return axios.post(
    'https://localhost:5001/api/users/login',
    {
      username: email,
      password: password
    }
  )
}