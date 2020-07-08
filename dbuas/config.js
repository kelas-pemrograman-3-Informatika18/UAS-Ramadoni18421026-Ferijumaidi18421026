const requestResponse = {
  gagal: (pesan) => {
    return {
      sukses: false,
      pesan: pesan
    }
  },
  sukses: (pesan) => {
    return {
      sukses: true,
      pesan: pesan
    }
  },
  serverError: {
    sukses: false,
    pesan: 'terjadi kesalahan di server kami'
  },
  suksesLogin: (data) => {
    return {
      sukses: true,
      pesan: 'berhasil Login',
      data: data
    }
  }
}
module.exports = { requestResponse }
