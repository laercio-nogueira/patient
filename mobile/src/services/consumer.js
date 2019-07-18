import axios from 'axios'

export default {
  getListConsultation () {
    return axios.get('http://192.168.2.100:3000/start')
  }
}