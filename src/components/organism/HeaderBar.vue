<script setup lang="ts">
import SearchBar from '@/components/molecules/SearchBar.vue'
import grid from '@/assets/grid.svg'
import gridRow from '@/assets/gridRow.svg'
import sun from '@/assets/sun.svg'
import moon from '@/assets/moon.svg'
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import STRINGS from '@/constants/strings.js'

</script>

<template>
  <header>
    <div>
      <span>
        <router-link to="/" class="brand-name">{{STRINGS.BRAND_NAME}}</router-link>
      </span>

      <div class="search-bar" v-if="showSearch">
        <SearchBar @onChange="updateSearch" :search="search" />
      </div>

      <h3 class="title" v-if="title.length > 0">
        {{ title }}
      </h3>

      <div class="settings-buttons">
        <button @click="toggleGridType">
          <img
            :src="gridType === 'grid' ? grid : gridRow"
            :alt="gridType === 'grid' ? 'Grid View' : 'Row View'"
            width="20"
            height="20"
          />
        </button>

        <button @click="toggleTheme">
          <img
            :src="theme === 'light' ? moon : sun"
            :alt="theme === 'light' ? 'Light Theme' : 'Dark Theme'"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HeaderBar',
  components: {
    SearchBar
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    search: {
      type: String,
      default: ''
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  emits: ['onChange'],
  data: () => {
    return {
      gridType: 'grid',
      theme: 'dark'
    }
  },
  methods: {
    ...mapMutations('home', ['setGridType', 'setTheme']),
    toggleGridType() {
      this.gridType = this.gridType === 'grid' ? 'list' : 'grid'
      this.setGridType(this.gridType)
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.body.className = this.theme;
    }
  }
})
</script>

<style scoped>
.brand-name {
  all: unset;
}

header {
  background-color: var(--secondary-color);
  color: var( --foreground-color-text);
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Coda', cursive;
  position: sticky;
  top: 0;
  z-index: 1;
  left: 0;
  right: 0;
}

header span {
  display: block;

  @media (max-width: 520px) {
    display: none;
  }
}

header > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  max-width: 1280px;
  justify-content: space-between;

  @media (max-width: 520px) {
    display: block;
  }
}

button {
  border: none;
  outline: none;
  cursor: pointer;

  background-color: var(--secondary-color-text);
  color: var(--secondary-color);
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
}

.settings-buttons {
  display: none;

  @media (min-width: 599px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
}

.title {
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-family: 'Coda', cursive;
}
</style>
