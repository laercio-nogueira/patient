var sql = require('../database/config');

class Auth {}

Auth.verifyLogin = ({email, password}, result) => {
  let verifyClient = `SELECT id, name, type_account as account 
    FROM patient 
    WHERE email = '${email}' AND password = '${password}'`
  
    let verifyDoctor = `SELECT id, name, type_account as account 
    FROM doctor 
    WHERE email = '${email}' AND password = '${password}'`

  let user
  sql.query(verifyClient, (err, resp) => {
    
    if (!err) {
      if (!resp.length) {
        sql.query(verifyDoctor, (err, resp) => {
          result(null, resp[0])
        })
      } else {
        result(null, resp[0])
      }
    } else {
      result(err)
    }
    
    

  })

}

module.exports = Auth