<template>
  <main>
    <HeaderBar :search="search" @onChange="updateSearchQuery" />
    <ProductListing :products="filteredProducts" />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductListing from '@/components/organism/ProductListing.vue'
import * as Products from '@/api/mocks/products.json'

/**
 * HomeView component
 * @component
 */
export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderBar,
    ProductListing
  },
  setup() {
    // Use Vuex store
    const store = useStore()

    /**
     * Local state for search
     * @type {Ref<string>}
     */
    const search = ref('')

    /**
     * Array of products from JSON file
     * @type {Product[]}
     */
    // const products: Product[] = Products.products

    /**
     * Computed property for searchQuery from Vuex store
     * @returns {ComputedRef<string>}
     */
    const searchQuery = computed(() => store.state.home.searchQuery)

    /**
     * Computed property for filtered products based on searchQuery
     * @returns {ComputedRef<Product[]>}
     */
    const filteredProducts = computed(() => {
      const products = store.state.home.products

      if (!products) {
        return []
      }
      return products.filter((product: Product) => {
        return product.productTitle.toLowerCase().includes(searchQuery.value.toLowerCase())
      })
    })

    // Method to update searchQuery in Vuex store
    const updateSearchQuery = (query: string) => {
      store.dispatch('home/updateSearchQuery', query)
    }

    // On component mount, set products to Vuex store
    onMounted(() => {
      // store.commit('setProducts', Products.products)
      store.dispatch('home/updateProducts', Products.products)
    })

    return {
      search,
      searchQuery,
      filteredProducts,
      updateSearchQuery
    }
  }
})
</script>
