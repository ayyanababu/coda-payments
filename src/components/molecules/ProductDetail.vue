<script lang="ts" setup>
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import fallbackImg from '@/assets/fallbackImg.png'
import type { ProductCardProps } from '@/store/productDetail'
import products from '@/api/mocks/products.json'
import { isEmpty } from 'lodash'
</script>

<template>
  <div class="prose product-container">
    <img :src="imgSrc" alt="" @error="handleImgError" />

    <div>
      <h1>{{ productDetail?.productTitle }}</h1>

      <span v-html="productDetail.shortDescription"></span>
    </div>
  </div>

  <span class="flex-col prose product-container" v-html="productDetail.longDescription"></span>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ProductDetail',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('productDetail', ['selectedProduct']),
    productDetail(): ProductCardProps {
      return this.selectedProduct as ProductCardProps
    },
    imgSrc() {
      return this.productDetail?.logoLocation || fallbackImg
    }
  },
  methods: {
    ...mapActions('productDetail', ['setProductDetail']),
    handleImgError(e: any) {
      e.target.src = fallbackImg
    }
  },
  mounted() {
    if (isEmpty(this.productDetail)) {
      const id = this.$route.params.id

      const product = products.products.filter((product) => {
        return product.id == id
      })[0]
      this.setProductDetail(product)
    }
  }
})
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: 100vw;
  }
}

img {
  width: 100%;
  margin-bottom: auto;
}

h1 {
  font-size: medium;
}

.flex-col {
  display: flex;
  flex-direction: column !important;
  gap: 1rem;
}
</style>
