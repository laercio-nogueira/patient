var sql = require('../database/config');

class Consultation {
  constructor (consultation) {
    this.patient_id = consultation.patient
    this.doctor_id = consultation.doctor
    this.hospital_id = consultation.hospital
    this.date = consultation.date.substr(0, 10)
    this.hour = consultation.hour
    this.status = consultation.status
  }
}

Consultation.getAllConsultation = (id, result) => {
  let select = `SELECT 
    doctor.name as doctor, 
    hospital.name as hospital, 
    consultation.date, 
    consultation.hour, 
    consultation.status,
    consultation.id
      FROM consultation
      INNER JOIN doctor ON consultation.doctor_id = doctor.id
      INNER JOIN hospital ON consultation.hospital_id = hospital.id
      WHERE consultation.patient_id = ${id}`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp)
    }
  })
}

Consultation.createConsultation = (data, result) => {
  sql.query("INSERT INTO consultation set ?", data, function (err, res) {
                
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res.insertId);
    }
  });           
}

Consultation.getConsultationById = (id, result) => {
  let select = `SELECT 
    doctor_id as doctor, 
    hospital_id as hospital,
    date, 
    hour
      FROM consultation 
      WHERE id = ${id}`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp)
    }
  })
} 

Consultation.cancelConsultation = (id, result) => {
  let select = `UPDATE consultation
    SET status = 0
    WHERE id = ${id}`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp.insertId)
    }
  })
} 

Consultation.updateConsultation = ({data, id}, result) => {
  let select = `UPDATE consultation
    SET 
      doctor_id = ${data.doctor},
      hospital_id = ${data.hospital},
      date = '${data.date.substr(0, 10)}',
      hour = '${data.hour}'
    WHERE id = ${id}`
    
  sql.query(select, (err, resp) => {
    if (err) {
      result(null, err)
    } else {
      result(null, resp.insertId)
    }
  })
}

module.exports = Consultation