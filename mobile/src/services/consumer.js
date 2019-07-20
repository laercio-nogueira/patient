import axios from 'axios'
import store from '../store'

export default {
  getListConsultation () {
    const token = store.getState().user.token
    return axios.get(`http://192.168.2.100:3000/consultation`, { headers: { token } })
  },
  getConsultationById (id) {
    const token = store.getState().user.token
    return axios.get(`http://192.168.2.100:3000/consultation/${id}`, { headers: { token } })
  },
  saveNewConsultation (data) {
    const token = store.getState().user.token
    return axios.post('http://192.168.2.100:3000/consultation', data, { headers: { token } })
  },
  editConsultation (data, id) {
    const token = store.getState().user.token
    return axios.put(`http://192.168.2.100:3000/consultation/${id}`, data, { headers: { token } })
  },
  cancelConsultation (id) {
    const token = store.getState().user.token
    return axios.delete(`http://192.168.2.100:3000/consultation/${id}`, { headers: { token } })
  },
  getListDoctor () {
    const token = store.getState().user.token
    return axios.get('http://192.168.2.100:3000/doctor', { headers: { token } })
  },
  getListHospital () {
    const token = store.getState().user.token
    return axios.get('http://192.168.2.100:3000/hospital', { headers: { token } })
  }
}