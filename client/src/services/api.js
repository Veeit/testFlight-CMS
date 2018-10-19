import axios from 'axios'

// Connect to server
export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
