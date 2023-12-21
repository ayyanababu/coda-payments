import { createStore } from 'vuex'
import home from './home'
import productDetail from './productDetail'

export default createStore({
  modules: {
    home,
    productDetail
  }
})
