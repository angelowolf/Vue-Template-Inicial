<template>
  <div>
    <div class="col-md-3">
        <label style="margin-bottom: 0px;">FECHA</label>
        <p class="input-group input-group-sm" style="width: 100%;">
        <fecha :options="opciones2" style="width: 100%;" v-model="opciones3.minDate"></fecha>
        </p>
    </div>
    <div class="col-md-3">
        <label style="margin-bottom: 0px;">FECHA minima</label>
        <p class="input-group input-group-sm" style="width: 100%;">
        <fecha :options="opciones3" style="width: 100%;" v-model="opciones2.maxDate"></fecha>
        </p>
    </div>   
    <div>
    <button @click="bsc = !bsc">CLICKME</button>
      <btn-buscar :haciendo="bsc" @click="buscar"></btn-buscar>
      <btn-gr :haciendo="bsc"></btn-gr>
      <btn :haciendo="bsc"></btn>
      <btn-ed :haciendo="bsc"></btn-ed>
      <btn-el :haciendo="bsc"></btn-el>
      <btn-nv :haciendo="bsc" @click="modalAlta = true"></btn-nv>
    </div>
    <tabla :data="data" :columnas="columnas" :titulos="titulos" :acciones="acciones" @consultar="consultar" @editar="editar" @eliminar="eliminar"></tabla>
    <b-modal title="Modal title" v-model="modalAlta" @ok="modalAlta = false">
    </b-modal>
  </div>
</template>
<script>
import flatpickConfig from '@/util/flatpickConfig'

export default {
  name: 'test-component',
  mixins: [flatpickConfig],
  data () {
    return {
      modalAlta: false,
      bsc: false,
      fechaMin: null,
      fechaMax: null,
      opciones2: {dateFormat: 'd-m-Y', maxDate: null},
      opciones3: {dateFormat: 'd-m-Y', minDate: null},
      data: [],
      columnas: [
        'sitNombre', 'sitCodigo', 'sitEstado'
      ],
      titulos: [
        'Nombre', 'Código', 'State'
      ],
      acciones: [
        {name: 'consultar', label: '', icon: 'fa fa-eye', class: 'btn btn-info', idData: 'sitCodigo'},
        {name: 'editar', label: '', icon: 'fa fa-edit', class: 'btn btn-warning', idData: 'sitCodigo'},
        {name: 'eliminar', label: '', icon: 'fa fa-remove', class: 'btn btn-danger', idData: 'sitCodigo'}
      ]
    }
  },
  methods: {
    buscar () {
      this.$http.get('http://192.168.30.79:7001/ledzite/api/sitios?numeroPagina=1&tamanioPagina=10').then(r => {
        console.log(r)
        this.data = r.data.contenidoPagina
      })
    },
    consultar (idData) {
      alert('consulto ' + idData)
    },
    editar (idData) {
      alert('edito ' + idData)
    },
    eliminar (idData) {
      alert('elimino ' + idData)
    }
  },
  computed: {
    asd () {
      return ''
    }
  }
}
</script>
