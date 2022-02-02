import axios from "axios";

export const SERVER_URL = 'http://localhost:5000'
// export const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''

export default function init() {
  axios.defaults.baseURL = SERVER_URL
  axios.defaults.withCredentials = false
}
