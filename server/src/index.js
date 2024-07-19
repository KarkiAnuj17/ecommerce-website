const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
app.use(express.json())
app.use(cors())
const userRoute = require('./routes/users')
const connect = require('./db/connection')
app.use(userRoute)
connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})