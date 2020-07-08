<template>
  <q-page class="bg-grey-3">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
        <q-card-section>
          <div class="text-h6 q-pb-md">
            Halaman Register
          </div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="username"
              label="Username Anda"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Username']"
            />

            <q-input
              filled
              v-model="Alamat"
              label="Alamat"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Alamat Anda']"
            />

            <q-input
              filled
              v-model="Notelp"
              label="Nomor Telfon"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Tolong Ketik Nomor Telfon']"
            />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Password Anda"
              lazy-rules
              :rules="[
               val => val !== null && val.length > 0 || 'Password Tidak Boleh Kosong']"
            />

            <div>
              <q-btn label="Register" type="submit" color="primary"  class="q-ml-sm" />
              <q-btn label="Login"  to="/" type="submit" flat/>
            </div>
        </q-form>
        </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      Alamat: null,
      Notelp: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/user/register', {
        username: this.username,
        Alamat: this.Alamat,
        Notelp: this.Notelp,
        password: this.password
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'loginuser' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.username = null
      this.password = null
      this.Alamat = null
      this.Notelp = null
    }
  }
}
</script>
