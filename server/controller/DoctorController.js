const Doctor = require('../model/DoctorModel')

module.exports = {
  listAllDoctor: (req, res) => {
    Doctor.getAllDoctor((err, resp) => {
      res.status(200).send(resp)
    })
  }
}