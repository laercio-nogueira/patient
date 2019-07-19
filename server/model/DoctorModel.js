var sql = require('../database/config');

class Doctor {}

Doctor.getAllDoctor = result => {
  let select = `SELECT id as value, name as label from doctor`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp)
    }
  })
}

module.exports = Doctor