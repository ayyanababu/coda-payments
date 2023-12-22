<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import fallbackImg from '@/assets/fallbackImg.png'
import type { ProductCardProps } from '@/store/productDetail'
import products from '@/api/mocks/products.json'
import { isEmpty } from 'lodash'
</script>

<template>
  <div class="product-container prose">
    <div class="top-bar">
      <div class="column">
        <img :src="productDetail?.logoLocation" alt="Product Image" />
      </div>
      <div class="column">
        <h1>{{ productDetail.name }}</h1>
        <div class="flex-row">
          <s>${{ productDetail?.variableDenomPriceMaxAmount }}</s>
          <p class="font-xl">${{ productDetail?.variableDenomPriceMinAmount }}</p>
        </div>
        <p>{{ productDetail.tagline }}</p>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="tabs">
        <button
          :class="activeTab === 'longDescription' ? 'active' : ''"
          @click="activeTab = 'longDescription'"
        >
          Long Description
        </button>
        <button
          :class="activeTab === 'shortDescription' ? 'active' : ''"
          @click="activeTab = 'shortDescription'"
        >
          Short Description
        </button>
      </div>
      <div v-if="activeTab === 'longDescription'" v-html="productDetail.longDescription"></div>
      <div v-if="activeTab === 'shortDescription'" v-html="productDetail.shortDescription"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  // Component name
  name: 'ProductDetail',

  // Child components used by this component
  components: {},

  // Props passed to this component
  props: {},

  // Data properties of this component
  data() {
    return {
      // The currently active tab, defaults to 'longDescription'
      activeTab: 'longDescription'
    }
  },

  // Computed properties of this component
  computed: {
    // Map the 'selectedProduct' state from the 'productDetail' Vuex module
    ...mapState('productDetail', ['selectedProduct']),

    // Cast the 'selectedProduct' state to the 'ProductCardProps' type
    productDetail(): ProductCardProps {
      return this.selectedProduct as ProductCardProps
    },

    // Compute the source of the product image, falling back to a default image if not available
    imgSrc() {
      return this.productDetail?.logoLocation || fallbackImg
    }
  },

  // Methods of this component
  methods: {
    // Map the 'setProductDetail' action from the 'productDetail' Vuex module
    ...mapActions('productDetail', ['setProductDetail']),

    // Handle image loading errors by falling back to a default image
    handleImgError(e: any) {
      e.target.src = fallbackImg
    }
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

<style scoped lang="scss">
.product-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  gap: 1rem;
}
p {
  margin: 0;
}

img {
  width: 100%;
  margin-bottom: auto;
  border-radius: 5px;
}

.flex-col {
  display: flex;
  flex-direction: column !important;
  gap: 1rem;
}

.top-bar {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
}

.bottom-bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tabs {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: baseline;
}

.font-xl {
  font-size: 2rem;
}

button {
  border: none;
  background: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--primary-color-text);
}

.bottom-bar .active {
  border-bottom: 2px solid var(--primary-color-text);
}
</style>
