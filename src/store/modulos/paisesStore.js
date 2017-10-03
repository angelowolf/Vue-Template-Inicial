import Vue from 'vue'
import {getPaises} from './../../paths'
import axios from 'axios'

const state = {
  paises: {
  }
}

const mutations = {
  SET_PAISES (state, paises) {
    state.paises = paises
  }
}

const actions = {
  cargarPaises: ({commit}) => {
    axios.get(getPaises).then(response => {
      commit('SET_PAISES', response.data)
    })
  }
}

const getters = {
  getPaisesTodos (state) {
    return state.paises
  }
}

export default {
  state, mutations, actions, getters
}
