<template>
    <div>
    <q-page padding>
        <q-card flat class="bg-white">
            <q-card-section class="q-gutter-md">
                <div class="text-h6">EDIT Daftar Motor</div>
                <q-form @submit="onSubmit" @reset="onReset" class="q-mt-lg">
                    <div class="q-gutter-md">
                        <div class="q-gutter-y-md column" style="max-width: 500px">
                          <q-select v-model="form.jenismotor" :options="optionGenre" label="Jenis Motor" :rules="[ val => val && val.length > 0 || 'Pilih jenis motor yang akan di input']" />
                            <q-input filled v-model="form.typemotor" label="typemotor" :rules="[ val => val && val.length > 0 || 'Tolong Ketik Type Motor']"></q-input>
                            <q-input filled v-model="form.Harga" type="number" label="Harga" :rules="[ val => val > 0 || 'Masukan Angka']"></q-input>
                                <q-file accept=".jpg, image/*" color="teal" filled v-model="image" label="Masukan gambar">
                                  <template v-slot:prepend>
                                    <q-icon name="cloud_upload" />
                                  </template>
                                </q-file>
                            <q-btn type="submit" @submit="onSubmit" label="Edit" icon="input" class="bg-blue-4" unelevated></q-btn>
                            <q-btn type="reset" @reset="onReset" label="Reset" icon="update" class="bg-red-8" flat unelevated></q-btn>
                        </div>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
    </div>
</template>
<script>
// import { QSelect } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        typemotor: null,
        Harga: null,
        jenismotor: null
      },
      optionGenre: ['Harley', 'Vespa', 'Custom'],
      image: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('Inputmokas/tampilsatudata/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.form.typemotor = data.typemotor
          this.form.Harga = data.Harga
          this.form.jenismotor = data.jenismotor
        })
    },
    onSubmit () {
      this.$axios.put('/Inputmokas/edit/' + this.$route.params.id, {
        typemotor: this.form.typemotor,
        Harga: this.form.Harga,
        jenismotor: this.form.jenismotor
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'DaftarMokas' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.form.typemotor = null
      this.form.Harga = null
      this.form.image = null
      this.form.jenismotor = null
    }
  }
}
</script>
