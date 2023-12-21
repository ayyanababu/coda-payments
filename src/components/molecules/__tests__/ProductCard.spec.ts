import { mount } from '@vue/test-utils'
import ProductCard from '@/components/molecules/ProductCard.vue'
import fallbackImg from '@/assets/fallbackImg.png'


jest.mock('vuex')
jest.mock('vue-router')

describe('ProductCard.vue', () => {
    let props
  
    beforeEach(() => {
      props = {
        product: {
          id: '1',
          logoLocation: 'https://example.com/image.png',
          productTitle: 'Test Product'
        }
      }
    })
  
    it('renders correctly', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: props
      })
      expect(wrapper.text()).toContain(props.product.productTitle)
    })
  
    it('sets the correct default data', () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: props
      })
      expect(wrapper.vm.imgSrc).toBe(props.product.logoLocation)
    })
  
    it('changes imgSrc to fallback when there is an error loading the image', async () => {
      const wrapper = shallowMount(ProductCard, {
        propsData: props
      })
      await wrapper.vm.handleImgError()
      expect(wrapper.vm.imgSrc).toBe(fallbackImg)
    })
  
    it('navigates to product detail on click', async () => {
      const push = jest.fn()
      const wrapper = shallowMount(ProductCard, {
        propsData: props,
        mocks: {
          $router: {
            push
          }
        }
      })
      await wrapper.find('#my-card').trigger('click')
      expect(push).toHaveBeenCalledWith(`/product/${props.product.id}`)
    })
  })