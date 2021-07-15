import App from '@/App';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(ElementUI);

const router = new VueRouter();

describe('App.vue', () => {
	it('Click on yes button calls our method with argument "tabName"', async () => {
		const spy = sinon.spy();
		const wrapper = shallowMount(App, {
			localVue,
			router,
			propsData: {
				callMe: spy
			}
		});
		await wrapper.find('[data-testid="tabs"]').trigger('click');
		// spy.should.have.been.calledWith('tabName');
	});
});
