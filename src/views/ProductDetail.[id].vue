<template>
  <div>
    <!-- HeaderBar component with a title and two props for controlling visibility of search and grid toggle -->
    <HeaderBar title="Product Detial" :showSearch="false" :showGridToggle="false" />
    <!-- ProductDetail component for displaying the details of a product -->
    <ProductDetail :product="productDetail" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import { isEmpty } from 'lodash'

import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductDetail from '@/components/molecules/ProductDetail.vue'
import type { ProductCardProps } from '@/store/productDetail'
import products from '@/api/mocks/products.json'
</script>

<script lang="ts">
// Defining the Vue component
export default defineComponent({
  name: 'ProductDetail',
  components: {
    HeaderBar,
    ProductDetail
  },
  /**
   * Computed property that returns the details of the selected product.
   * It first tries to find the product with the matching ID in the 'products' array.
   * If it can't find a product with the matching ID, it returns the 'selectedProduct' state from the 'productDetail' Vuex module.
   * The returned product detail is cast to the 'ProductCardProps' type.
   * @return {ProductCardProps} The details of the selected product.
   */
  computed: {
    // Map the 'selectedProduct' state from the 'productDetail' Vuex module
    ...mapState('productDetail', ['selectedProduct']),
    ...mapState('home', ['products']),

    /**
     * Computed property that returns the details of the selected product.
     * It first tries to find the product with the matching ID in the 'products' array.
     * If it can't find a product with the matching ID, it returns the 'selectedProduct' state from the 'productDetail' Vuex module.
     * The returned product detail is cast to the 'ProductCardProps' type.
     * @return {ProductCardProps} The details of the selected product.
     */
    productDetail(): ProductCardProps {
      const productId = this.$route.params.id
      if (!isEmpty(products)) {
        return (
          products.products.filter((eachProduct) => {
            return eachProduct.id == productId
          })[0] || {}
        )
      } else {
        return this.selectedProduct as ProductCardProps
      }
    }
  },
  methods: {
    ...mapActions('productDetail', ['setProductDetail'])
  },
  /**
   * Lifecycle hook that is called when the component is mounted.
   * If the product detail is not already loaded, it fetches the product detail.
   * It gets the product ID from the route parameters and finds the product with the matching ID in the products array.
   * Then, it sets the product detail to the found product.
   * Ideally here there should be api call but for demo we are getting from mock
   */
  mounted() {
    // If the product detail is not already loaded, fetch it
    if (isEmpty(this.productDetail)) {
      // Get the product ID from the route parameters
      const id = this.$route.params.id

      // Find the product with the matching ID in the products array
      const product = products.products.filter((product) => {
        return product.id == id
      })[0]

      // Set the product detail to the found product
      this.setProductDetail(product)
    }
  }
})
</script>

<style></style>
