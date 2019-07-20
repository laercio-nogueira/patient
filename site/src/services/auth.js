import axios from 'axios'
import environment from '../environment'

export default {
  isAuthenticated (email) {
    return axios.post(`http://localhost:3000/signup`, { email })
  }
}
