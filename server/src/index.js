const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const userRoute = require('./routes/users')
const connect = require('./db/connection')
app.use(userRoute)

connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})