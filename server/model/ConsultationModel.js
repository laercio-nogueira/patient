var sql = require('../database/config');

let Consultation = consultation => {
  this.id = consultation.id
  this.userId = consultation.user_id
  this.doctorId = consultation.doctor_id
  this.hospitalId = consultation.hospital_id
  this.date = consultation.date
  this.hour = consultation.hour
  this.status = consultation.status
}

Consultation.getAllConsultation = result => {
  let select = `SELECT doctor.name as doctor, hospital.name as hospital, consultation.date, consultation.hour, consultation.status
    FROM consultation
    INNER JOIN doctor ON consultation.doctor_id = doctor.id
    INNER JOIN hospital ON consultation.hospital_id = hospital.id
    WHERE consultation.patient_id = 1`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      resp.map(i => {
        console.log(i)
      })
      result(null, resp)
    }
  })
}

module.exports = Consultation