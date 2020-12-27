// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/base.scss'
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  window.Vue = Vue;
  appOptions.store = new Vuex.Store({
    state: {
      isMenuActive: false
    },
    mutations: {
      toggleMenu (state) {
        state.isMenuActive = !state.isMenuActive
      },
      deactivateMenu (state) {
        if (state.isMenuActive == true) {
          state.isMenuActive = false
        }
      }
    }
  });

  router.beforeEach((to, from, next) => {
    appOptions.store.commit('deactivateMenu');
    next();
  })

  Vue.component('Layout', DefaultLayout);

}