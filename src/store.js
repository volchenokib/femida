import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data: {
			isLoding: false
		},
		panelData: {},
		headerTitle: 'Анализ по компании'
	},
	getters: {
		getDataState(state) {
			return state.data.isLoding;
		},
		panelData(state) {
			return state.panelData;
		}
	},
	mutations: {
		API_DATA_PENDING(state) {
			state.data.isLoding = true;
		},
		API_DATA_SUCCES(state, payload) {
			state.panelData = payload;
			state.data.isLoding = false;
		}
	},
	actions: {
		getDashboardData(store, payload) {
			store.commit('API_DATA_PENDING');

			// return axios
			// 	.get(
			// 		'https://78.media.tumblr.com/tumblr_m39nv7PcCU1r326q7o1_500.png',
			// 		{
			// 			responseType: 'arraybuffer'
			// 		},
			// 		payload
			// 	)

			let promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('response');
				}, 3000);
			});

			return promise
				.then(response => {
					let payload = {
						contracts: 6928,
						money: 12.8,
						customers: 1964,
						cri: 43,
						risk: 0.39
					};
					store.commit('API_DATA_SUCCES', payload);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
				});
		}
	}
});
