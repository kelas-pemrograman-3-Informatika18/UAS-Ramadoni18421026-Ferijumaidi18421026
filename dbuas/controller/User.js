const userModel = require('../model/User')
const bcrypt = require('bcrypt')

// kontrol unutk membuat user baru
exports.register = (data) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(data.password, 10, (_err, hash) => {
      userModel.findOne({
        username: data.username
      }).then(user => {
        if (user) {
          reject({
            sukses: false,
            pesan: 'Username telah terdaftar'
          })
        } else {
          data.password = hash
          userModel.create(data)
            .then(() => {
              resolve({
                sukses: true,
                pesan: 'berhasil registrasi'
              })
            }).catch(() => {
              reject({
                sukses: false,
                pesan: 'gagal registrasi'
              })
            })
        }
      })
    })
  })

// kontrol unutk login
exports.login = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      username: data.username
    }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(data.password, user.password)) {
          resolve({
            sukses: true,
            pesan: 'berhasil login',
            data: user
          })
        } else {
          reject({
            sukses: false,
            pesan: 'password salah'
          })
        }
      } else {
        reject({
          sukses: false,
          pesan: 'username tidak terdaftar'
        })
      }
    })
  })
