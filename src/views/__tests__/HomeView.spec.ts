// tests/HomeView.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import HeaderBar from '@/components/organism/HeaderBar.vue'
import ProductListing from '@/components/organism/ProductListing.vue'

// Create a mock store
const mockStore = {
    dispatch: () => {},
  }

describe('HomeView', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomeView, {
      global: {
        mocks: {
          store: mockStore
        }
      }
    })
  })
  it.skip('renders without errors', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it.skip('contains HeaderBar component', () => {
    expect(wrapper.findComponent(HeaderBar).exists()).toBe(true)
  })

  it.skip('contains ProductListing component', () => {
    expect(wrapper.findComponent(ProductListing).exists()).toBe(true)
  })
})
