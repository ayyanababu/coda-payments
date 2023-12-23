<template>
  <!-- Product listing container with dynamic class based on grid view state -->
  <div class="product-listing" :class="{ 'grid-view': isGridView, 'list-view': !isGridView }">
    <!-- Loop through each product and render a ProductCard component for it -->
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>

  <div class="not-found" v-if="products.length === 0">No Games found</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ProductCard from '@/components/molecules/ProductCard.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProductListing',
  components: {
    ProductCard
  },
  props: {
    /**
     * Array of products to be displayed
     * @type {Array}
     */
    products: {
      type: Array,
      required: true
    }
  },
  setup() {
    // Access Vuex store
    const store = useStore()

    /**
     * Computed property that determines if the grid view is active
     * @returns {boolean}
     */
    const isGridView = computed(() => store.state.home.gridType === 'grid')

    return {
      isGridView
    }
  }
})
</script>

<!-- Scoped styles for ProductListing component -->
<style scoped>
.product-listing {
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
}

@media (max-width: 520px) {
  .product-listing {
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

.not-found {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  width: 100%;
}
</style>
