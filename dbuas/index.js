// ini adalah koneksi ke data base
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const mongoURL = 'mongodb://localhost:27017/uasferiramadoni'
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('berhasil konek kedatabase')
}).catch(() => {
  console.log('gagal konek ke database')
})

const directory = path.join(__dirname, '/statics/')
app.use(express.static(directory))
app.use(cors())

app.use(bodyParser.json({
  extended: true,
  limit: '20mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))

// nodelis Route kita
app.use('/user', require('./routes/User'))
app.use('/Inputmokas', require('./routes/Inputmokas'))

app.listen(5000, function () {
  console.log('Server Telah Berjalan Di port 5000')
})
