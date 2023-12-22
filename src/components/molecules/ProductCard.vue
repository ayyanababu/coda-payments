<template>
  <!-- The ProductCard component displays a product's image and title. -->
  <a
    :href="'/product/' + product.id"
    id="my-card"
    :class="{ 'grid-view': isGridView, 'list-view': !isGridView }"
    @click="handleClick"
  >
    <!-- The product's image. If the image fails to load, a fallback image is used. -->
    <img :src="productImageSrc" alt="" @error="handleImageError" />
    <!-- The product's title. -->
    <span>{{ product?.productTitle }}</span>
  </a>
</template>

<script setup lang="ts">
// Vue imports
import { defineComponent } from 'vue'
// Vuex imports
import { mapState, mapActions } from 'vuex'
// Type imports
import type { ProductCardProps } from '@/store/productDetail'
// Asset imports
import fallbackImg from '@/assets/fallbackImg.png'
</script>

<script lang="ts">
export default defineComponent({
  name: 'ProductCard',
  components: {},
  props: {
    product: {
      type: Object as () => ProductCardProps,
      required: true
    }
  },
  data() {
    return {
      // The product's image source. If the product's logoLocation is not provided, a fallback image is used.
      productImageSrc: this.product?.logoLocation || fallbackImg,
    }
  },
  computed: {
    ...mapState('home', ['gridType']),
    isGridView(): boolean {
      return this.gridType ? this.gridType === 'grid' : false;
    }
  },
  mounted() {},
  methods: {
    ...mapActions('productDetail', ['setProductDetail']),
    /**
     * Handles the click event on the product card.
     * Prevents the default event, sets the product detail, and navigates to the product page.
     * @param {Event} event - The click event.
     */
    handleClick(e: Event): void {
      e.preventDefault()
      this.setProductDetail(this.product)
      this.$router.push(`/product/${this.product.id}`)
    },
    /**
     * Handles the error event on the product image.
     * Sets the product's image source to the fallback image.
     */
     handleImageError(): void {
      console.log('### error in image')
      this.productImageSrc = fallbackImg
    }
  }
})
</script>

<style scoped>
.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.list-view img,
.list-view {
  width: 100% !important;
}

#my-card {
  position: relative;
  border: 1px solid var(--secondary-color);
  border-radius: 15px;
  contain: content;
  width: 100%;
  max-width: 250px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#my-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--primary-color-text);
}

#my-card span {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--primary-color);
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--primary-color-text);
}
</style>
