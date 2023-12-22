import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import SearchBar from '@/components/molecules/SearchBar.vue'

describe('SearchBar.vue', () => {

  let actions;
  let store;
  let wrapper;


  beforeEach(() => {
    const store = createStore({
      modules: {
        home: {
          state: {
            searchQuery: '', // Mock the searchQuery state
            gridType: 'grid'
          },
          namespaced: true
        }
      }
    })

    wrapper = mount(SearchBar, {
      global: {
        plugins: [store]
      }
    })
  })


  it('renders a search input field', () => {
    // const wrapper = mount(SearchBar)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  })

  it('renders a search icon', () => {
    // const wrapper = mount(SearchBar)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('clears the search query when input is cleared', async () => {
    // const wrapper = mount(SearchBar)
    const input = wrapper.find('input[type="text"]')
  
    await input.setValue('test query')
    expect(wrapper.vm.searchQuery).toBe('test query')
  
    await input.setValue('')
    expect(wrapper.vm.searchQuery).toBe('')
  })


  it('updates the search query when input is entered', async () => {
    // const wrapper = mount(SearchBar)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test query')
    expect(wrapper.vm.searchQuery).toBe('test query')
  })

})