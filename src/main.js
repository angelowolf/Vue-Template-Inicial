// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Toast from 'vue-easy-toast'
import VueProgressBar from 'vue-progressbar'
import Componentes from 'componentes-vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'
// Componentes
import SelectUbicaccion from './components/util/selectUbicaccion'
import BotonBuscar from './components/util/BotonBuscar'
import BotonGuardar from './components/util/BotonGuardar'
import Boton from './components/util/Boton'
import BotonEditar from './components/util/BotonEditar'
import BotonEliminar from './components/util/BotonEliminar'
import BotonNuevo from './components/util/BotonNuevo'
import Tabla from './components/util/Tabla'
// CSS
import 'flatpickr/dist/themes/material_blue.css'
import 'componentes-vue/dist/componentes-vue.min.css'

Vue.use(BootstrapVue)
Vue.use(Componentes)
Vue.use(Toast)

// Componentes
Vue.component('selectUbicaccion', SelectUbicaccion)
Vue.component('btn-buscar', BotonBuscar)
Vue.component('btn-gr', BotonGuardar)
Vue.component('btn', Boton)
Vue.component('btn-ed', BotonEditar)
Vue.component('btn-el', BotonEliminar)
Vue.component('btn-nv', BotonNuevo)
Vue.component('tabla', Tabla)

// PROGRESS BAR
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

Vue.prototype.$http = axios
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/* DIRECTIVAS */
Vue.directive('error', (el, binding) => {
  if (binding.value.form !== undefined) {
    if (binding.value.form.errors.has(binding.value.campo)) {
      el.className += el.className.indexOf('has-danger') < 0 ? ' has-danger' : ''
    } else {
      el.className = el.className.replace('has-danger', '')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
