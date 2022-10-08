import { shallowMount } from '@vue/test-utils'
import TitleComponent from '../../../src/components/TitleComponent/TitleComponent.vue'

const title = 'Foo bar'
const icon = {
  src: 'https://via.placeholder.com/40x40',
  width: 40,
  height: 40,
  alt: 'test image'
}

describe('TitleComponent', () => {
  it('renders with supplied title prop', () => {
    const wrapper = shallowMount(TitleComponent, {
      propsData: {
        title
      }
    });

    const h1Tag = wrapper.find('h1');

    expect(h1Tag.text())
      .toMatch(title);
  })

  it('will not render when missing required title prop', () => {
      const wrapper = shallowMount(TitleComponent);

      expect(wrapper)
          .toMatchSnapshot();
  });

  it('renders with supplied icon and title props', () => {
      const wrapper = shallowMount(TitleComponent, {
          propsData: {
              title,
              icon,
          },
      });

      expect(wrapper)
        .toMatchSnapshot();
  });
})
