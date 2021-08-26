import axios from 'axios';
import {HOST} from "./host"

export const userLogin = (email, password) =>{
  console.log(HOST);
  return axios.post(
    `${HOST}/api/users/login`,
    {
      username: email,
      password: password
    }
  )
}

export const userSubscribeService = (email, password) => {
  return axios.post(
    `${HOST}/api/users/subscribe`,
    {
      username: email,
      email: email,
      password: password
    }
  )
}