<template>
  <main>
    <HeaderBar :search="search" @onChange="updateSearchQuery" />
    <ProductListing :products="filteredProducts" />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as Products from '@/api/mocks/products.json'
import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductListing from '@/components/organism/ProductListing.vue'

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

    /**
     * Method to update searchQuery in Vuex store.
     * It dispatches the 'home/updateSearchQuery' action with the provided query.
     * @param {string} query - The search query.
     */
    const updateSearchQuery = (query: string) => {
      store.dispatch('home/updateSearchQuery', query)
    }

    /**
     * Lifecycle hook that is called when the component is mounted.
     * It dispatches the 'home/updateProducts' action with the products array.
     */
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
