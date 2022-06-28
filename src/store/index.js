import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    product: {}
}

const getters = {
    getProduct(state) {
        return state.product
    }
}

const mutations = {
    setProduct(state, _product) {
        state.product = _product
    }
}

const actions = {
    addProduct(context, _payload) {
        context.commit('setProduct', _payload)
        console.log('add in store')
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store