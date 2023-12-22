<template>
  <div>
    <!-- HeaderBar component with a title and two props for controlling visibility of search and grid toggle -->
    <HeaderBar title="Product Detial" :showSearch="false" :showGridToggle="false" />
    <!-- ProductDetail component for displaying the details of a product -->
    <ProductDetail />
  </div>
</template>

<script setup lang="ts">
  // Importing the HeaderBar and ProductDetail components
  import HeaderBar from '@/components/organism/HeaderBar.vue'
  import ProductDetail from '@/components/molecules/ProductDetail.vue'
  // Importing the defineComponent function from Vue
  import { defineComponent } from 'vue'
</script>

<script lang="ts">
  // Defining the Vue component
  export default defineComponent({
    name: 'ProductDetail', // Name of the component
    components: {
      HeaderBar, // Registering the HeaderBar component
      ProductDetail // Registering the ProductDetail component
    },
    props: {}, // Props for the component (currently empty)
    data() {
      return {} // Data for the component (currently empty)
    },
    computed: {}, // Computed properties for the component (currently empty)
    methods: {} // Methods for the component (currently empty)
  })
</script>

<style></style> <!-- Styles for the component (currently empty) -->