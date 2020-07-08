<template>
  <q-page>
  <q-table
      title="Daftar Motor Custom"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="jenismotor" :props="props">
            {{ props.row.jenismotor }}
          </q-td>

          <q-td key="typemotor" :props="props">
            {{ props.row.typemotor }}
          </q-td>

          <q-td key="Harga" :props="props">
            {{ props.row.Harga }}
          </q-td>

          <q-td key="image" :props="props">
             <q-img
                :src="`${$baseImageURL}/${props.row.image}`"
                spinner-color="white"
                style="height: 140px; max-width: 150px"
              />
          </q-td>

          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn color="orange" :to="{ name : 'formedit', params: { id: props.row._id}}" icon="edit" unelevated></q-btn>
              </div>
              <div class="col">
                <q-btn @click="confirm(props.row._id)" color="negative" icon="delete" unelevated></q-btn>
              </div>
            </div>
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'formedit',
  data () {
    return {
      columns: [
        {
          name: 'jenismotor',
          required: true,
          label: 'jenismotor',
          align: 'left',
          field: 'jenismotor',
          sortable: true
        },
        {
          name: 'typemotor',
          required: true,
          label: 'typemotor',
          align: 'left',
          field: 'typemotor',
          sortable: true
        },
        { name: 'Harga', align: 'center', label: 'Harga', field: 'Harga', sortable: true },
        { name: 'image', align: 'image', label: 'image', field: 'image', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],
      data: []
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
    },
    // delete (id) {
    //   this.$axios.delete(`Inputmokas/delete/${id}`)
    //     .then(res => {
    //       if (res.data.sukses) {
    //         this.$showNotif(res.data.pesan, 'positive')
    //       } else {
    //         this.$showNotif(res.data.pesan, 'negative')
    //       }
    //     })
    // }
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Yakin?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`Inputmokas/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
      })
    }
  }
}
</script>
