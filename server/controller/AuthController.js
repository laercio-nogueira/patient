const Auth = require('../model/AuthModel')
const jwt = require('../middleware/jwt')

module.exports = {
  verifyLogin: (req, res) => {

    Auth.verifyLogin(req.body, (err, resp) => {
      if (resp) {
        res.status(200).json({...resp, token: jwt.tokenGenerator(resp.id)})
      } else {
        res.status(400).json({message: 'Email ou senha incorreto'})
      }
    })   
  }
}