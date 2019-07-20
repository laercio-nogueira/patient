const jwt = require('jsonwebtoken')
const secret = 'pAtIeNtS2019'

module.exports = {
  tokenGenerator (id) {
    return jwt.sign({ id }, secret, {})
  },
  tokenVerify (token, result) {
    jwt.verify(token, 'pAtIeNtS2019', (err, decode) => {
      err ? result(false) : result(decode.id)
    })
  }
}