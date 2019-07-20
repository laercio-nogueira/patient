const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser')

const Consultation = require('../controller/ConsultationController')
const Doctor = require('../controller/DoctorController')
const Hospital = require('../controller/HospitalController')
const Auth = require('../controller/AuthController')
const Patients = require('../controller/PatientsController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/consultation')
  .get(Consultation.listAllConsultation)
  .post(Consultation.createConsultation)
  .put(Consultation.updateConsultation)

app.route('/consultation/:id')
  .get(Consultation.getConsultationById)
  .put(Consultation.updateConsultation)
  .delete(Consultation.cancelConsultation)

app.route('/doctor')
  .get(Doctor.listAllDoctor)

app.route('/hospital')
  .get(Hospital.listAllHospital)

app.route('/auth')
  .post(Auth.verifyLogin)

app.route('/patients')
  .get(Patients.getListPatients)

module.exports = app;