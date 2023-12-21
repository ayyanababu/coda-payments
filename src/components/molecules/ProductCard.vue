<template>
  <a
    :href="'/product/' + product.id"
    id="my-card"
    :class="{ 'grid-view': isGridView, 'list-view': !isGridView }"
    @click="handleClick"
  >
    <img :src="imgSrc" alt="" @error="handleImgError" />
    <span>{{ product?.productTitle }}</span>
  </a>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import fallbackImg from '@/assets/fallbackImg.png'
import { mapState, mapActions } from 'vuex'
import type { ProductCardProps } from '@/store/productDetail'
</script>

<script lang="ts">
export default defineComponent({
  name: 'ProductCard',
  components: {},
  props: {
    product: {
      type: Object as () => ProductCardProps, // Use the ProductCardProps type as the value for the type property
      required: true
    }
  },
  data() {
    return {
      imgSrc: this.product?.logoLocation || fallbackImg
    }
  },
  computed: {
    ...mapState('home', ['gridType']),
    isGridView() {
      return this.gridType === 'grid'
    }
  },
  mounted() {},
  methods: {
    ...mapActions('productDetail', ['setProductDetail']),
    handleImgError() {
      this.imgSrc = fallbackImg
    },
    handleClick(e: Event) {
      e.preventDefault()
      this.setProductDetail(this.product)
      this.$router.push(`/product/${this.product.id}`)
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
  width: 250px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 500) {
    width: 100%;
  }
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
