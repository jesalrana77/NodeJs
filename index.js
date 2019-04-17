const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv').config();
const cors = require('cors')
const crudRepository = require('./Database/crudRepository')
app.unsubscribe(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
crudRepository.createConnection();
app.use('/api/v1/user', require('./Routes/userRoute'))
app.use('/', (req, res, next) => {
    res.send("Hello World")
})
const port = process.env.PORT
app.listen(port, () => console.log(`App is running on ${port}`))