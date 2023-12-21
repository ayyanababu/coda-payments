<template>
  <div class="product-listing" :class="{ 'grid-view': isGridView, 'list-view': !isGridView }">
    <ProductCard v-for="product in products" :key="product.id" :product="product"> </ProductCard>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/molecules/ProductCard.vue'
</script>

<script lang="ts">
import { mapState } from 'vuex'
export default defineComponent({
  name: 'HomeView',
  components: {},
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {},
  computed: {
    ...mapState('home', ['gridType']),
    isGridView() {
      return this.gridType === 'grid'
    }
  },
  mounted() {
    console.log(this.products)
  }
})
</script>

<style>
.product-listing {
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 520px) {
    flex-flow: column;
  }
}

.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.list-view {
  display: flex;
  flex-flow: column;
}
</style>
