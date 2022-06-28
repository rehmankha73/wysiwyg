import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    blog: {}
}

const getters = {
    getBlog(state) {
        return state.blog
    }
}

const mutations = {
    setBlog(state, _blog) {
        state.blog = _blog
    }
}

const actions = {
    addBlog(context, _payload) {
        context.commit('setBlog', _payload)
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