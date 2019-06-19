import Vue from 'vue';
import Router from 'vue-router';
import Companies from './views/Companies.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'company',
			component: Companies
		},
		{
			path: '/region',
			name: 'region',
			component: () =>
				import(/* webpackChunkName: "region" */ './views/Regions.vue')
		},
		{
			path: '/relations',
			name: 'relations',
			component: () =>
				import(/* webpackChunkName: "relations" */ './views/Relations.vue')
		}
	]
});
