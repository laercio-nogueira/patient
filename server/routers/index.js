const express = require('express');
const app = express.Router();
const Consultation = require('../controller/ConsultationController')


app.route('/start')
  .get(Consultation.listAllConsultation)
//   .post(Consultation.createConsultation)
//   .put(Consultation.updateConsultation)

module.exports = app;