const Hospital = require('../model/HospitalModel')

module.exports = {
  listAllHospital: (req, res) => {
    Hospital.getAllHospital((err, resp) => {
      res.status(200).send(resp)
    })
  }
}