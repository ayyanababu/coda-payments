import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
// import Vuex from 'vuex'
import router from './router'
import store from './store'

// Vue.use(Vuex)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

