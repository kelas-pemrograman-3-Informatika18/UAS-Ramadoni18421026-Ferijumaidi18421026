const router = require('express').Router()
const InputmokasController = require('../controller/Inputmokas')
const uploadSetting = require('../uploadConfig')
const fields = uploadSetting.upload.fields([
  {
    name: 'image',
    maxCount: 1
  }
])
router.post('/insert', fields, (req, res) => {
  const imageName = uploadSetting.cekNull(req.files.image)
  const data = Object.assign(JSON.parse(req.body.data), {
    image: imageName
  })
  InputmokasController.simpanInputmokas(data)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

// fungsi menyimpan 0000000000000000000000000000000000
router.post('/input', (req, res) => {
  InputmokasController.simpanInputmokas(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

// fungsi tampil 000000000000000000000000000000000000000
router.get('/tampil', (req, res) => {
  InputmokasController.tampilInputmokas()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.get('/tampilsatudata/:id', (req, res) => {
  InputmokasController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampilvespa', (req, res) => {
  InputmokasController.tampilvespa()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampilharley', (req, res) => {
  InputmokasController.tampilHarly()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
// fungsi edit 0000000000000000000000000000000000000000000
router.put('/edit/:id', (req, res) => {
  InputmokasController.editInputmokas(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
// router.put('/edit/:id', fields, (req, res) => {
//   const imageName = uploadSetting.cekNull(req.files[' image '])
//   let data = JSON.parse(req.body.data)
//   let changeImage = false
//   if (imageName) {
//     changeImage = true
//     data = Object.assign(data, {
//       imageName: imageName,
//       oldImage: data.image
//     })
//   }
//   InputmokasController.edit(data, req.params.id, changeImage)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// Fungsi Delete 0000000000000000000000000000000000000000
// router.delete('/delete/:id', (req, res) => {
//   InputmokasController.hapusKegiatan(req.params.id)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })
router.delete('/delete/:id', (req, res) => {
  InputmokasController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
