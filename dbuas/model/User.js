const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String
  },
  Alamat: {
    type: String
  },
  Notelp: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('User', UserSchema)
