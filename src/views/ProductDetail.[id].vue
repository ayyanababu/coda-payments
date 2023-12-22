<template>
  <div>
    <!-- HeaderBar component with a title and two props for controlling visibility of search and grid toggle -->
    <HeaderBar title="Product Detial" :showSearch="false" :showGridToggle="false" />
    <!-- ProductDetail component for displaying the details of a product -->
    <ProductDetail :product="productDetail" />
  </div>
</template>

<script setup lang="ts">
// Importing the HeaderBar and ProductDetail components
import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductDetail from '@/components/molecules/ProductDetail.vue'
import { defineComponent, computed, onMounted } from 'vue'
import type { ProductCardProps } from '@/store/productDetail'
import { mapState, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import products from '@/api/mocks/products.json'


// const route = useRoute()
// const productId = route.params.id
</script>

<script lang="ts">
// Defining the Vue component
export default defineComponent({
  name: 'ProductDetail',
  components: {
    HeaderBar,
    ProductDetail
  },
    // Computed properties of this component
  computed: {
    // Map the 'selectedProduct' state from the 'productDetail' Vuex module
    ...mapState('productDetail', ['selectedProduct']),

    // Cast the 'selectedProduct' state to the 'ProductCardProps' type
    productDetail(): ProductCardProps {
      return this.selectedProduct as ProductCardProps
    }
  },
  methods: {
    ...mapActions('productDetail', ['setProductDetail']),
  },
  // Lifecycle hook that is called when the component is mounted
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
