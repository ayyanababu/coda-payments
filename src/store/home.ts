// import { ProductCardProps } from '../types/index.ts';
import  type { ProductCardProps } from '../types/index.js'

export default {
  namespaced: true,
  state: {
    searchQuery: '',
    gridType: 'grid',
    products: [],
  },
  mutations: {
    setSearchQuery(state: { searchQuery: string }, query: string) {
      state.searchQuery = query
    },
    setGridType(state: { gridType: 'grid' | 'list' }, type: 'grid' | 'list') {
      state.gridType = type
    },
    setProducts(state: { products: [ProductCardProps] }, payload: [ProductCardProps]) {
      state.products = payload
    }
  },
  actions: {
    updateSearchQuery({ commit }: any, query: string) {
      commit('setSearchQuery', query)
    },
    updateGridType({ commit }: any, type: 'grid' | 'list') {
      commit('setGridType', type)
    },
    updateProducts({commit}: any, payload: [ProductCardProps]) {
      commit('setProducts', payload)
    }
  }
}
