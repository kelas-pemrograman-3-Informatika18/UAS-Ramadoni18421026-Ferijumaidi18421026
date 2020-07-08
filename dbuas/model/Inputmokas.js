const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InputmokasSchema = new Schema({
  typemotor: {
    type: String
  },
  Harga: {
    type: Number
  },
  jenismotor: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Inputmokas', InputmokasSchema)
