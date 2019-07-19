const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser')
const Consultation = require('../controller/ConsultationController')
const Doctor = require('../controller/DoctorController')
const Hospital = require('../controller/HospitalController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/consultation')
  .get(Consultation.listAllConsultation)
  .post(Consultation.createConsultation)
  .put(Consultation.updateConsultation)

app.route('/consultation/:id')
  .get(Consultation.getConsultationById)
  .put(Consultation.updateConsultation)

app.route('/consultation/:id/cancel')
  .put(Consultation.cancelConsultation)

app.route('/doctor')
  .get(Doctor.listAllDoctor)

app.route('/hospital')
  .get(Hospital.listAllHospital)

module.exports = app;