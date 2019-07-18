const User = require('../model/ConsultationModel')

module.exports = {
  listAllConsultation: (req, res) => {
    User.getAllConsultation((err, resp) => {
      res.status(200).send(resp)
    })
  },
  createConsultation: () => {

  },
  updateConsultation: () => {

  }
}