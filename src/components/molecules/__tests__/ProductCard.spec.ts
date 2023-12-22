import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/molecules/ProductCard.vue'
import { createStore } from 'vuex'
import { createRouter, createMemoryHistory } from 'vue-router'


describe('ProductCard.vue', () => {
  let product
  let store
  let wrapper

  beforeEach(() => {
    product = {
      id: '1',
      productTitle: 'Test Product',
      logoLocation: 'test-image.jpg',
    }

    store = createStore({
      modules: {
        home: {
          state: {
            gridType: 'grid'
          },
          namespaced: true
        }
      }
    })

    wrapper = mount(ProductCard, {
      props: {
        product
      },
      global: {
        plugins: [store]
      }
    })
  })

  it('renders product details correctly', async () => {
    expect(wrapper.find('#my-card img').attributes('src')).toBe(product.logoLocation)
    expect(wrapper.find('#my-card span').text()).toBe(product.productTitle)
  })

  it('has the correct class based on the gridType state', () => {
    const productCard = wrapper.find('#my-card')
    expect(productCard.classes()).toContain(store.state.home.gridType === 'grid' ? 'grid-view' : 'list-view')

  })

  it('renders fallback image when logoLocation is not provided', async () => {
    const product = {
      id: '1',
      productTitle: 'Test Product',
    }
    const wrapper = mount(ProductCard, {
      props: {
        product
      },
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.find('#my-card img').attributes('src')).toBe('/src/assets/fallbackImg.png')
  })

  it('navigates to correct product page on click', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: []
    })

    let lastRoute = ''

    // Mock the router push method
    router.push = (route) => {
      lastRoute = route
      return Promise.resolve()
    }

    wrapper = mount(ProductCard, {
      props: {
        product
      },
      global: {
        plugins: [store, router]
      }
    })

    await wrapper.find('#my-card').trigger('click')
    // expect(router.currentRoute.value.path).toBe(`/product/${product.id}`)
    // expect(router.push).toHaveBeenCalledWith(`/product/${product.id}`)
    expect(lastRoute).toBe(`/product/${product.id}`)
  })
})


