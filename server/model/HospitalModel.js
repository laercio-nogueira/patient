var sql = require('../database/config');

class Hospital {}

Hospital.getAllHospital = result => {
  let select = `SELECT id as value, name as label from hospital`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp)
    }
  })
}

module.exports = Hospital