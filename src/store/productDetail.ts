export type ProductCardProps = {
  id: number
  gvtId: number
  name: string
  productTagline: string
  shortDescription: string
  longDescription: string
  logoLocation: string
  productUrl: string
  voucherTypeName: string
  orderUrl: string
  productTitle: string
  variableDenomPriceMinAmount: string
  variableDenomPriceMaxAmount: string
  __typename: string
}

export default {
  namespaced: true,
  state: {
    selectedProduct: {}
  },
  mutations: {
    selectProduct(state: { selectedProduct?: ProductCardProps }, product: any) {
      state.selectedProduct = product
    }
  },
  actions: {
    setProductDetail({ commit }: any, product: any) {
      commit('selectProduct', product)
    }
  }
}
