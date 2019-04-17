const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    customerId: Number,
    firstName: String,
    lastName: String,
    city: String,
    state: String
})

module.exports = mongoose.model('User', userSchema)