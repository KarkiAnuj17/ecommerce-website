const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
app.use(express.json())
app.use(cors())

app.use('/uploads',express.static('uploads'));
const userRoute = require('./routes/users')
const productRoute = require('./routes/products')
const contactRoute = require('./routes/contact')
const connect = require('./db/connection')
connect()
app.use(userRoute)
app.use(productRoute)
app.use(contactRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})