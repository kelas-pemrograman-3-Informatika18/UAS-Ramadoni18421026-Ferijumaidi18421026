<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">

        <div class="col-md-4 col-xs-12 q-pa-md" v-for="(Inputmokas, i) in data" :key="i">
          <q-card flat class="bg-grey text-white">
            <q-card-section>
              <center>
                <div class="text-h5">
                  {{ Inputmokas.typemotor }}
                </div>
              </center>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="heigth: 150; max-width: 200" :src="`${$baseImageURL}/${Inputmokas.image}`"/>
            </q-card-section>
            <center>
                <q-card-section>
                <div>
                    Harga : Rp.  {{ Inputmokas.Harga }}
                </div>
                </q-card-section>
                <q-card-section>
                <q-btn unelevated color="positive" icon="add_shopping_cart"  @click="c = true" no-caps label="Cek Out"></q-btn>
                </q-card-section>
            </center>
          </q-card>
        </div>
        <q-dialog v-model="c">
          <q-card>
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Order Via Whatshap</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
             Anda Dapat Memesan Motor ini melalui Whatshap Admin
             <a href="https://api.whatsapp.com/send?phone=6285841712758&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera."><q-btn color="blue" icon-right="send" label="Kirim" /></a>
            </q-card-section>
          </q-card>
        </q-dialog>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Motor Custom',
  data () {
    return {
      dialog: false,
      data: [],
      c: false,
      bar: false,
      bar2: false,
      toolbar: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('Inputmokas/tampil')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
