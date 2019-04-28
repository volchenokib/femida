import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
		headerTitle: "Анализ по компании"
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
			console.log("getters", state.lineChartIndexData);
			return state.lineChartIndexData;
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
			state.data.isLoding = false;
			state.input.isDisable = false;
		}
	},
	actions: {
		getDashboardData(store, payload) {
			store.commit("API_DATA_PENDING");

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
					resolve("response");
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
							expectedData: [[0, 0], [15, 0.06], [20, 0.1], [30, 0.2], [40, 0.15], [55, 0]],
							markPoint: [30, 0.2]
						}
					};
					store.commit("API_DATA_SUCCES", payload);
				})
				.catch(error => {
					store.commit("API_DATA_FAILURE", error);
				});
		}
	}
});
