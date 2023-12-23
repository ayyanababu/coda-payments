<!-- @keyup.enter="updateSearchQueryDebounced" -->
<template>
  <!-- The SearchBar component provides an input field for searching. -->
  <div class="search-bar">
    <!-- The search input field. -->
    <input type="text" v-model="searchQuery" :placeholder="STRINGS.SEARCH_PLACEHOLDER" />
    <!-- clear text icon -->
    <img
      src="@/assets/clear.svg"
      alt="Clear"
      width="30"
      height="30"
      @click="handleClearText"
      v-if="searchQuery.length > 0"
    />

    <!-- The search icon. -->
    <img
      src="@/assets/search.svg"
      alt="Search"
      width="20"
      height="20"
      v-if="searchQuery.length === 0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { debounce } from 'lodash'
import STRINGS from '@/constants/strings.js'

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const store = useStore()
    const searchQuery = ref('')

    /**
     * Debounced function to update search query in Vuex store
     * @param {string} newVal - The new search query
     */
    const updateSearchQueryDebounced = debounce((newVal: string) => {
      store.dispatch('home/updateSearchQuery', newVal)
    }, 300)

    /**
     * Watcher that observes changes in the 'searchQuery' reactive reference.
     * When 'searchQuery' changes, it calls the 'updateSearchQueryDebounced' function with the new value.
     * @param {string} newVal - The new value of 'searchQuery'.
     */
    watch(searchQuery, (newVal: string) => {
      updateSearchQueryDebounced(newVal)
    })

    /**
     * Lifecycle hook that is called when the component is mounted.
     * It sets the value of 'searchQuery' to the 'searchQuery' state from the 'home' Vuex module.
     */
    onMounted(() => {
      searchQuery.value = store.state.home.searchQuery
    })

    /**
     * Toggles the theme between 'light' and 'dark'
     * and updates the body class
     */
    const handleClearText = () => {
      searchQuery.value = ''
      store.dispatch('home/updateSearchQuery', '')
    }

    return {
      searchQuery,
      handleClearText,
      STRINGS
    }
  }
})
</script>

<style scoped lang="scss">
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

  .clear-text-button {
    all: unset;
    position: absolute;
    right: 40px;
    top: 2px;

    & img {
      position: unset;
    }
  }
  .clear-text {
    cursor: pointer;
    right: 40px;
    transition: all 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
      opacity: 0.75;
      transform: scale(1.1);
    }

    &:active {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
}
</style>
