<template>
  <div class="product-container prose">
    <div class="top-bar">
      <div class="column">
        <img :src="product?.logoLocation" @error="handleImageError" :alt="product.name" />
      </div>
      <div class="column">
        <h1>{{ product.name }}</h1>
        <div class="flex-row">
          <s>${{ product?.variableDenomPriceMaxAmount }}</s>
          <p class="font-xl">${{ product?.variableDenomPriceMinAmount }}</p>
        </div>
        <p class="product-tagline">{{ product.tagline }}</p>
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
      <div v-if="activeTab === 'longDescription'" v-html="product.longDescription"></div>
      <div v-if="activeTab === 'shortDescription'" v-html="product.shortDescription"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import fallbackImg from '@/assets/fallbackImg.png'

export default defineComponent({
  // Component name
  name: 'ProductDetail',

  /**
   * @property {Object} product - The product object that contains the details of a product.
   * @property {string} product.name - The name of the product.
   * @property {string} product.logoLocation - The URL of the product image.
   * @property {string} product.shortDescription - The short description of the product.
   * @property {string} product.longDescription - The long description of the product.
   * This prop is required.
   */
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  /*
   * @data {string} activeTab - The currently active tab, defaults to 'longDescription'.
   */
  data() {
    return {
      activeTab: 'longDescription'
    }
  },

  /**
   * Computed property that returns the source of the product image.
   * It returns the 'logoLocation' property of the 'product' prop if it exists.
   * If 'logoLocation' does not exist, it returns a fallback image.
   * @return {string} The source of the product image.
   */
  computed: {
    // Compute the source of the product image, falling back to a default image if not available
    imgSrc() {
      return this.product?.logoLocation || fallbackImg
    }
  },
  methods: {
    // Map the 'setProductDetail' action from the 'productDetail' Vuex module
    // ...mapActions('productDetail', ['setProductDetail']),

    /**
     * @method handleImageError - Handle image loading errors by falling back to a default image.
     * @param {Event} e - The event object.
     */
    handleImageError(e: any) {
      e.target.src = fallbackImg
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
