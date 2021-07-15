import appHeader from '@/components/appHeader.vue';
import ElementUI from 'element-ui';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('App.vue', () => {
	it('the header has been rendered successfully', () => {
		const wrapper = shallowMount(appHeader, { localVue });
		expect(wrapper.isVueInstance()).toBe(true);
	});
});
