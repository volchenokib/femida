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

	let wrapper;
	const findTab = ()=> wrapper.findAll('[data-test-id=tabs]').wrappers.find((t)=> t.tex() ==='Region');

	const createComponent = ()=> {
		wrapper = shallowMount(App, {
			localVue,
			router
		});
	}

	afterEach(()=> {
		wrapper.destroy();
	})

	it('footer should show the correct text', ()=> {
		createComponent();
		expect(wrapper.find('[data-testid=footer]').text()).toBe('Copyright © SSD Dashboard 2022. All Rights Reserved')
	})

	it('header should show the correct text', ()=> {
		createComponent();
		expect(wrapper.find('#app').text()).toContain('Super Simple Dashboard')
	})

	// it('tabs', ()=> {
	// 	createComponent();
	// 	console.log(wrapper.findAll('[data-testid]').wrappers)
	// 	console.log(wrapper.html())

	// 	findTab().trigger('Click')
	// 	expect(handleClick).toHaveBeenCalled();
	// })


	// it('Click on yes button calls our method with argument "tabName"', async () => {
	// 	const spy = sinon.spy();
	// 	const wrapper = shallowMount(App, {
	// 		localVue,
	// 		router,
	// 		propsData: {
	// 			callMe: spy
	// 		}
	// 	});
	// 	console.log(wrapper.html);
	// 	await wrapper.find('[data-testid="tabs"]').trigger('click');
	// 	// spy.should.have.been.calledWith('tabName');
	// });
	
});
