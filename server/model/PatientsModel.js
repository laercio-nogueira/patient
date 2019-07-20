var sql = require('../database/config');

class Patients {}

Patients.getAllPatients = (id, result) => {
  console.log(id)
  let select = `SELECT 
    patient.name as patient, 
    hospital.name as hospital, 
    consultation.date, 
    consultation.hour, 
    consultation.status
      FROM consultation
      INNER JOIN patient ON consultation.patient_id = patient.id
      INNER JOIN hospital ON consultation.hospital_id = hospital.id
      WHERE consultation.doctor_id = ${id}`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp)
    }
  })
}

module.exports = Patients