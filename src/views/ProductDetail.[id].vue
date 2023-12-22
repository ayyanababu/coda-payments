<template>
  <div>
    <HeaderBar title="Product Detial" :showSearch="false" :showGridToggle="false" />
    <ProductDetail />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductDetail from '@/components/molecules/ProductDetail.vue'
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  name: 'ProductDetail',
  components: {
    HeaderBar
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
})
</script>

<style></style>
