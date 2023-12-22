<!-- @keyup.enter="updateSearchQueryDebounced" -->
<template>
  <!-- The SearchBar component provides an input field for searching. -->
  <div class="search-bar">
    <!-- The search input field. -->
    <input type="text" v-model="searchQuery" placeholder="Search Games..." />
    <!-- The search icon. --> 
    <img src="@/assets/search.svg" alt="Search" width="20" height="20" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { debounce } from 'lodash'

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const store = useStore()
    const searchQuery = ref('')

    const updateSearchQueryDebounced = debounce((newVal: string) => {
      store.dispatch('home/updateSearchQuery', newVal)
    }, 300)

    watch(searchQuery, (newVal: string) => {
      updateSearchQueryDebounced(newVal)
    })

    return {
      searchQuery
    }
  }
})
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.75rem 1rem;
    outline: none;
    width: 420px;
    color: #333;
    font-size: medium;
    transition: all 0.2s ease-in-out;

    @media (max-width: 520px) {
      width: 100%;
    }
  }

  img {
    position: absolute;
    right: 10px;
  }
}
</style>
