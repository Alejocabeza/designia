import axios from 'axios'

export const AXIOSAPI = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API })
