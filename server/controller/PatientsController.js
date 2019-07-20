const Patients = require('../model/PatientsModel')
const jwt = require('../middleware/jwt')

module.exports = {
  getListPatients: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
      
        Patients.getAllPatients(id, (err, resp) => {
        res.status(200).send(resp)
      })
    })
  }
}