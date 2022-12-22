import axios from "axios";

// export const SERVER_URL = 'https://futurelabs-blog.onrender.com/'
export const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://futurelabs-blog.onrender.com'

export default function init() {
  axios.defaults.baseURL = SERVER_URL
  axios.defaults.withCredentials = false
}
