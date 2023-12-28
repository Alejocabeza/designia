import axios from 'axios'

export const AXIOSAPI = axios.create({
  baseURL: 'http://localhost:8000'
})
