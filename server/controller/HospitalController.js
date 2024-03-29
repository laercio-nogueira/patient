const Hospital = require('../model/HospitalModel')
const jwt = require('../middleware/jwt')

module.exports = {
  listAllHospital: (req, res) => {
    jwt.tokenVerify(req.headers['token'], id => {
      if (id === false) return res.status(401)
        .send({ auth: false, message: 'Failed to authenticate token.' })

      Hospital.getAllHospital((err, resp) => {
        res.status(200).send(resp)
      })
    })
  }
}