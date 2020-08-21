import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: JSON.parse(localStorage.getItem('post') || '[]')
  },
  mutations: {
    CREATE_POST(state, post) {
      state.posts.push(post)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    }
  },
  actions: {
    CREATE_POST({ commit }, post) {
      commit('CREATE_POST', post)
    }
  },
  getters: {
    posts: state => state.posts
  },
  modules: {
  }
})
