const Consultation = require('../model/ConsultationModel')
const jwt = require('../middleware/jwt')

module.exports = {
  listAllConsultation: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(401)
        .send({ auth: false, message: 'Failed to authenticate token.' })

      Consultation.getAllConsultation(id, (err, resp) => {
        res.status(200).send(resp)
      })
    })
  },

  createConsultation: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
      
      let newConsultation = new Consultation({...req.body, status: 1, patient: id})
      Consultation.createConsultation(newConsultation, err => {
        res.status(200).json({ message: 'success' })
      })
    })
  },

  getConsultationById: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })

      Consultation.getConsultationById(req.params.id, (err, resp) => {
        res.status(200).json(resp)
      })
    })
  },

  cancelConsultation: (req, res) => {
    jwt.tokenVerify(req.headers['token'], decode => {
      if (decode === false) return res.status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })

      Consultation.cancelConsultation(req.params.id, (err, id) => {
        res.status(200).json({message: 'success', id})
      })
    })
  },

  updateConsultation: (req, res) => {
    jwt.tokenVerify(req.headers['token'], decode => {
      if (decode === false) return res.status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
      
      Consultation.updateConsultation({data: req.body, id: req.params.id}, (err, id) => {
        res.status(200).json({message: 'success', id})
      })
    })
  }
}