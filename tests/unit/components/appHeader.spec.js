import { shallow, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui'; // added
import appHeader from '@/components/appHeader.vue';

const localVue = createLocalVue(); // added
localVue.use(ElementUI);

describe('App.vue', () => {
	it('the header has been rendered successfully', () => {
		const wrapper = shallow(appHeader, {});
		expect(wrapper.isVueInstance()).toBe(true);
	});
});
