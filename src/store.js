import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data: {
			isLoding: false
		},
		input: {
			isDisable: false
		},
		panelData: {},
		lineChartData: {},
		lineChartIndexData: {},
		// pie charts at region page
		customerAmount: {},
		vendorAmount: {},
		headerTitle: 'Анализ по компании'
	},
	getters: {
		getDataState(state) {
			return state.data.isLoding;
		},
		getInputState(state) {
			return state.input.isDisable;
		},
		panelData(state) {
			return state.panelData;
		},
		lineChartData(state) {
			return state.lineChartData;
		},
		lineChartIndexData(state) {
			return state.lineChartIndexData;
		},
		customerAmountData(state) {
			return state.customerAmount;
		},
		vendorAmountData(state) {
			return state.vendorAmount;
		}
	},
	mutations: {
		API_DATA_PENDING(state) {
			state.data.isLoding = true;
			state.input.isDisable = true;
		},
		API_DATA_SUCCES(state, payload) {
			state.panelData = payload.panelData;
			state.lineChartData = payload.lineChartData;
			state.lineChartIndexData = payload.lineChartIndexData;
			state.customerAmount = payload.customerAmount;
			state.vendorAmount = payload.vendorAmount;
			state.data.isLoding = false;
			state.input.isDisable = false;
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
						panelData: {
							contracts: 6928,
							money: 12.8,
							customers: 1964,
							cri: 43,
							risk: 0.39
						},
						lineChartData: {
							actualData: [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43],
							expectedData: [55, 37, 50, 43, 40, 100, 35, 50, 41, 48, 42, 47]
						},
						lineChartIndexData: {
							expectedData: [
								[0, 0],
								[15, 0.06],
								[20, 0.1],
								[30, 0.13],
								[40, 0.15],
								[50, 0.11],
								[55, 0]
							],
							markPoint: [20, 0.1],
							titleValue: '75'
						},
						customerAmount: {
							actualData: [
								{
									value: 60,
									name: 'ДРУГИЕ',
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'млн. руб'
								},
								{
									value: 240,
									name: 'ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ',
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'тыс. руб'
								},
								{
									value: 149,
									name:
										"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'тыс. руб'
								},
								{
									value: 100,
									name: "УМП 'СПЕЦАВТОХОЗЯЙСТВО Г.ТОМСКА'",
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'млн. руб'
								},
								{
									value: 59,
									name: "ПАО 'СОВКОМБАНК'",
									cri: '15',
									contracts: '2',
									sum: '0,8',
									sumUnit: 'млн. руб'
								}
							]
						},
						vendorAmount: {
							actualData: [
								{
									value: 350,
									name: 'ДРУГИЕ',
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'тыс. руб'
								},
								{
									value: 205,
									name: 'ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ',
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'млн. руб'
								},
								{
									value: 138,
									name:
										"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
									cri: '46',
									contracts: 415,
									sum: 1.4,
									sumUnit: 'млн. руб'
								},
								{
									value: 89,
									name: "УМП 'СПЕЦАВТОХОЗЯЙСТВО Г.ТОМСКА'",
									cri: '46',
									contracts: 415,
									sum: '1,4',
									sumUnit: 'тыс. руб'
								},
								{
									value: 98,
									name: "ПАО 'СОВКОМБАНК'",
									cri: '46',
									contracts: '415',
									sum: '1,4',
									sumUnit: 'млрд. руб'
								}
							]
						}
					};
					store.commit('API_DATA_SUCCES', payload);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
				});
		}
	}
});
