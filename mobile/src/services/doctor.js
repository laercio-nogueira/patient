import axios from 'axios'
import store from '../store'

export default {
  getListPatients (id) {
    const token = store.getState().user.token
    return axios.get(`http://192.168.2.100:3000/patients`, { headers: { token } })
  }
}