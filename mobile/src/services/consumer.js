import axios from 'axios'

export default {
  getListConsultation () {
    return axios.get('http://192.168.2.100:3000/consultation')
  },
  getConsultationById (id) {
    return axios.get(`http://192.168.2.100:3000/consultation/${id}`)
  },
  saveNewConsultation (data) {
    return axios.post('http://192.168.2.100:3000/consultation', data)
  },
  editConsultation (data, id) {
    return axios.put(`http://192.168.2.100:3000/consultation/${id}`, data)
  },
  cancelConsultation (id) {
    return axios.put(`http://192.168.2.100:3000/consultation/${id}/cancel`)
  },
  getListDoctor () {
    return axios.get('http://192.168.2.100:3000/doctor')
  },
  getListHospital () {
    return axios.get('http://192.168.2.100:3000/hospital')
  }
}