<template>
  <div class="product-container prose">
    <div class="top-bar">
      <div class="column">
        <img :src="product?.logoLocation" alt="Product Image" />
      </div>
      <div class="column">
        <h1>{{ product.name }}</h1>
        <div class="flex-row">
          <s>${{ product?.variableDenomPriceMaxAmount }}</s>
          <p class="font-xl">${{ product?.variableDenomPriceMinAmount }}</p>
        </div>
        <p>{{ product.tagline }}</p>
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

  // Props passed to this component
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  // Data properties of this component
  data() {
    return {
      // The currently active tab, defaults to 'longDescription'
      activeTab: 'longDescription'
    }
  },

  // Computed properties of this component
  computed: {
    // Compute the source of the product image, falling back to a default image if not available
    imgSrc() {
      return this.product?.logoLocation || fallbackImg
    }
  },
  methods: {
    // Map the 'setProductDetail' action from the 'productDetail' Vuex module
    // ...mapActions('productDetail', ['setProductDetail']),

    // Handle image loading errors by falling back to a default image
    handleImgError(e: any) {
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
