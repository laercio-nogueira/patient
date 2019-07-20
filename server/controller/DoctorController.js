const Doctor = require('../model/DoctorModel')
const jwt = require('../middleware/jwt')

module.exports = {
  listAllDoctor: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(401)
        .send({ auth: false, message: 'Failed to authenticate token.' })

      Doctor.getAllDoctor((err, resp) => {
        res.status(200).send(resp)
      })
    })
  }
}