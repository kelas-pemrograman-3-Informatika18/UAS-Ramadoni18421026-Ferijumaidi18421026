const InputmokasModel = require('../model/Inputmokas')
const objectId = require('mongoose').Types.ObjectId
const { requestResponse } = require('../config')
// const Inputmokas = require('../model/Inputmokas')
const { deleteImage } = require('../uploadConfig')
// const { request } = require('express')

// kontrol unutk TAMBAAH 00000000000000000000000000000000000000
exports.simpanInputmokas = (data) =>
  new Promise((resolve, reject) => {
    InputmokasModel.create(data)
      .then(() => resolve(requestResponse.sukses('berhasil input data mokas')))
      .catch(() => reject(requestResponse.serverError))
  })

// kontrol unutk MENAMPILKAN 0000000000000000000000000000000000000000
exports.tampilInputmokas = () =>
  new Promise((resolve, reject) => {
    InputmokasModel.find({
      jenismotor: 'Custom'
    })
      .then(data => {
        resolve({
          sukses: true,
          pesan: 'Berhasil memuat data',
          data: data
        })
      }).catch(() => {
        reject({
          sukses: false,
          pesan: 'gagal memuat data',
          data: []
        })
      })
  })
exports.tampilvespa = () =>
  new Promise((resolve, reject) => {
    InputmokasModel.find({
      jenismotor: 'Vespa'
    })
      .then(data => {
        resolve({
          sukses: true,
          pesan: 'Berhasil memuat data',
          data: data
        })
      }).catch(() => {
        reject({
          sukses: false,
          pesan: 'gagal memuat data',
          data: []
        })
      })
  })
exports.tampilHarly = () =>
  new Promise((resolve, reject) => {
    InputmokasModel.find({
      jenismotor: 'Harley'
    })
      .then(data => {
        resolve({
          sukses: true,
          pesan: 'Berhasil memuat data',
          data: data
        })
      }).catch(() => {
        reject({
          sukses: false,
          pesan: 'gagal memuat data',
          data: []
        })
      })
  })
exports.tampilkanSatuData = (id) =>
  new Promise((resolve, reject) => {
    InputmokasModel.findOne({
      _id: objectId(id)
    }).then((data) => {
      resolve(data)
    }).catch(() => reject({
      sukses: false,
      pesan: 'Gagal memuat data'
    }))
  })

// fungsi untuk EDIT 000000000000000000000000000000000000
exports.editInputmokas = (data, id) =>
  new Promise((resolve, reject) => {
    InputmokasModel.updateOne({
      _id: objectId(id)
    }, data).then(() => {
      resolve({
        sukses: true,
        pesan: 'Berhasil edit data'
      })
    }).catch(() => {
      reject({
        sukses: false,
        pesan: 'Gagal mengubah data'
      })
    })
  })
// exports.editInputmokas = (data, id) =>
//   new Promise((resolve, reject) => {
//     InputmokasModel.updateOne({
//       _id: objectId(id)
//     }, data)
//       .then(() => {
//         if (changeImage) {
//           deleteImage('data.oldImage')
//         }
//         resolve(requestResponse.sukses('berhasil Edit data'))
//       }).catch(() => reject(requestResponse.serverError))
//   })
// fungsi HAPUS 000000000000000000000000000000000000000
// exports.hapusKegiatan = (id) =>
//   new Promise((resolve, reject) => {
//     InputmokasModel.deleteOne({
//       _id: objectId(id)
//     }).then(() => {
//       resolve({
//         sukses: true,
//         pesan: 'Berhasil Hapus data'
//       })
//     }).catch(() => {
//       reject({
//         sukses: false,
//         pesan: 'Gagal Hapus data'
//       })
//     })
//   })
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    InputmokasModel.findOne({
      _id: objectId(id)
    }).then(Inputmokas => {
      InputmokasModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(Inputmokas.image)
        resolve(requestResponse.sukses('berhasil delete'))
      }).catch(() => reject(requestResponse.serverError))
    })
  })
