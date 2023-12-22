<template>
  <main>
    <HeaderBar :search="search" @onChange="updateSearch" />

    <ProductListing :products="filteredProducts" />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import HeaderBar from '@/components/organism/HeaderBar.vue'
import * as Products from '@/api/mocks/products.json'
import ProductListing from '@/components/organism/ProductListing.vue'
import { mapActions, mapState } from 'vuex'
</script>

<script lang="ts">
export default defineComponent({
  name: 'HomeView',
  components: {},
  props: {},
  data() {
    return {
      products: Products.products,
      search: ''
    }
  },
  computed: {
    ...mapState('home', ['searchQuery']),
    filteredProducts() {
      return this.products.filter((product) => {
        return product.productTitle.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  methods: { ...mapActions('home', ['updateSearchQuery']) }
})
</script>

<style scoped></style>
