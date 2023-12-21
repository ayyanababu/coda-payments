<!-- @keyup.enter="updateSearchQueryDebounced" -->
<template>
  <div class="search-bar">
    <input type="text" v-model="searchText" placeholder="Search" />
    <img src="@/assets/search.svg" alt="Search" width="20" height="20" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { debounce } from 'lodash'

export default {
  data() {
    return {
      searchText: ''
    }
  },
  watch: {
    searchText: debounce(function (newVal) {
      this.updateSearchQuery(newVal)
    }, 300)
  },
  methods: {
    ...mapActions('home',['updateSearchQuery'])
    // updateSearchQueryDebounced: debounce(function() {
    //   this.updateSearchQuery(this.searchText)
    // }, 300)
  }
}
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
