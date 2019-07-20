import axios from 'axios'

export default {
  auth (email, password) {
    return axios.post('http://192.168.2.100:3000/auth', {email, password})
  }
}