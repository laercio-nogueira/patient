const express = require('express')
const routers = require('./routers')

app = express()
port = process.env.PORT || 3000

app.use('/', routers)
app.listen(port);