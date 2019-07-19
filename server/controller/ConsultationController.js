const Consultation = require('../model/ConsultationModel')

module.exports = {
  listAllConsultation: (req, res) => {
    Consultation.getAllConsultation((err, resp) => {
      res.status(200).send(resp)
    })
  },
  createConsultation: (req, res) => {
    let newConsultation = new Consultation({...req.body, status: 1})
    Consultation.createConsultation(newConsultation, (err, id) => {
      res.status(200).json({message: 'success', id})
    })
  },
  getConsultationById: (req, res) => {
    Consultation.getConsultationById(req.params.id, (err, resp) => {
      res.status(200).json(resp)
    })
  },
  cancelConsultation: (req, res) => {
    Consultation.cancelConsultation(req.params.id, (err, id) => {
      res.status(200).json({message: 'success', id})
    })
  },
  updateConsultation: (req, res) => {
    Consultation.updateConsultation({data: req.body, id: req.params.id}, (err, id) => {
      console.log(id)
    })
  }
}