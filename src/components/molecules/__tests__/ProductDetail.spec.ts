// tests/ProductDetail.spec.js
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductDetail from '@/components/molecules/ProductDetail.vue'

describe('ProductDetail.vue', () => {
  it('renders product name and image correctly', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      image: 'test-image.jpg',
      logoLocation: 'test-image.jpg'
    }

    const wrapper = mount(ProductDetail, {
      props: { product }
    })

    expect(wrapper.find('h1').text()).toBe(product.name)
    expect(wrapper.find('img').attributes('src')).toBe(product.logoLocation)
  })

  it('renders product price and tagline correctly', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      logoLocation: 'test-image.jpg',
      variableDenomPriceMaxAmount: 120,
      variableDenomPriceMinAmount: 80,
      tagline: 'This is a great product'
    }

    const wrapper = mount(ProductDetail, {
      props: { product }
    })

    expect(wrapper.find('.flex-row s').text()).toBe(`$${product.variableDenomPriceMaxAmount}`)
    expect(wrapper.find('.flex-row .font-xl').text()).toBe(
      `$${product.variableDenomPriceMinAmount}`
    )
    expect(wrapper.find('.product-tagline').text()).toBe(product.tagline)
  })

  it('applies active class to the correct tab and displays the correct description', async () => {
    const product = {
      id: 1,
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      logoLocation: 'test-image.jpg',
      tagline: 'This is a great product',
      longDescription: 'This is a long description',
      shortDescription: 'This is a short description'
    }

    const wrapper = mount(ProductDetail, {
      props: { product }
    })

    // Check initial active tab and description
    expect(wrapper.find('.tabs button.active').text()).toBe('Long Description')

    // Find the div that contains the longDescription and check its content
    const divs = wrapper.findAll('.bottom-bar div')
    let longDescriptionDiv
    if (divs.length) {
      console.log('####', divs)
      longDescriptionDiv = divs.find((w) => w.text().includes(product.longDescription))
    }
    expect(longDescriptionDiv?.exists()).toBe(true)
    const shortDescriptionTab = wrapper.findAll('.tabs button').find(w => w.text() === 'Short Description')


      console.log('%%%%', shortDescriptionTab)
    await shortDescriptionTab.trigger('click')

    // Check active tab and description after change
    expect(wrapper.find('.tabs button.active').text()).toBe('Short Description')

    // Find the div that contains the shortDescription and check its content
    const shortDescriptionDiv = divs.find((w) => {
        console.log('$$$', w.text())
       return  w.text().includes(product.shortDescription)
    }
      
    )
    expect(shortDescriptionDiv?.exists())
  })
})
