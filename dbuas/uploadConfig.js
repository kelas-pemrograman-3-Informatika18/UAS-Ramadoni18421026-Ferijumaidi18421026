const multer = require('multer')
const path = require('path')
const MAX_SIZE = 20000000
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './statics')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname))
  }
})

// eslint-disable-next-line no-unused-vars
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/.png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: MAX_SIZE
  }
})

const cekNull = (fileUpload) => {
  if (fileUpload === undefined || fileUpload === null) {
    return null
  } else {
    return fileUpload[0].filename
  }
}

const deleteImage = (image) => {
  fs.unlinkSync(`./statics/${image}`)
}

module.exports = { multer, upload, cekNull, deleteImage }
