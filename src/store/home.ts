export default {
  namespaced: true,
  state: {
    searchQuery: '',
    gridType: 'grid'
  },
  mutations: {
    setSearchQuery(state: { searchQuery: string }, query: string) {
      state.searchQuery = query
    },
    setGridType(state: { gridType: 'grid' | 'list' }, type: 'grid' | 'list') {
      state.gridType = type
    }
  },
  actions: {
    updateSearchQuery({ commit }: any, query: string) {
      commit('setSearchQuery', query)
    },
    updateGridType({ commit }: any, type: 'grid' | 'list') {
      commit('setGridType', type)
    }
  }
}
