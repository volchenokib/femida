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
		topContractsData: {},
		winRateData: {},

		// pie charts at region page
		customerAmount: {},
		vendorAmount: {},
		criCompositionData: {},

		// search companies input
		companies: [
			"AO 'Р-Фарм'",
			"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
			"ООО 'Инвестиционное агенство'",
			"ПОА 'Совкомбанк'",
			"OOO 'БТЕ'"
		],
		searchLoading: false,
		options: [],

		// tab title
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
			return state.lineChartIndexData;
		},
		customerAmountData(state) {
			return state.customerAmount;
		},
		vendorAmountData(state) {
			return state.vendorAmount;
		},
		topContractsData(state) {
			return state.topContractsData;
		},
		criCompositionData(state) {
			return state.criCompositionData;
		},
		winRateData(state) {
			return state.winRateData;
		},

		companies(state) {
			return state.companies;
		},
		searchLoading(state) {
			return state.searchLoading;
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
			state.topContractsData = payload.topContractsData;
			state.criCompositionData = payload.criCompositionData;
			state.winRateData = payload.winRate;
			state.data.isLoding = false;
			state.input.isDisable = false;
		},
		API_SEARCH_PENDING(state) {
			state.searchLoading = true;
		},

		API_SEARCH_SUCCES(state, payload) {
			state.companies = payload;
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
				}, 2000);
			});

			return promise
				.then(response => {
					let payload = {
						panelData: {
							contracts: 6928,
							money: 12.8,
							customers: 1964,
							cri: 43,
							risk: 0.2
						},

						lineChartData: {
							actualData: [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43],
							expectedData: [55, 37, 50, 43, 40, 100, 35, 50, 41, 48, 42, 47]
						},

						lineChartIndexData: {
							expectedData: [[0, 0], [15, 0.06], [20, 0.1], [30, 0.13], [40, 0.15], [50, 0.11], [55, 0]],
							markPoint: [20, 0.1],
							titleValue: "75"
						},

						customerAmount: {
							actualData: [
								{
									value: 60,
									name: "ДРУГИЕ",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "млн. руб"
								},
								{
									value: 240,
									name: "ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "тыс. руб"
								},
								{
									value: 149,
									name: "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "тыс. руб"
								},
								{
									value: 100,
									name: "УМП 'СПЕЦАВТОХОЗЯЙСТВО Г.ТОМСКА'",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "млн. руб"
								},
								{
									value: 59,
									name: "ПАО 'СОВКОМБАНК'",
									cri: "15",
									contracts: "2",
									sum: "0,8",
									sumUnit: "млн. руб"
								}
							]
						},

						vendorAmount: {
							actualData: [
								{
									value: 150,
									name: "ДРУГИЕ",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "тыс. руб"
								},
								{
									value: 205,
									name:
										"МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ 'УПРАВЛЕНИЕ МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТЬЮ И ЗАКУПКАМИ НЕРЮНГРИНСКОГО РАЙОНА'",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "млн. руб"
								},
								{
									value: 280,
									name: "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
									cri: "46",
									contracts: 415,
									sum: 1.4,
									sumUnit: "млн. руб"
								},
								{
									value: 89,
									name:
										"ГОСУДАРСТВЕННОЕ КАЗЕННОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ЛЕНИНГРАДСКОЙ ОБЛАСТИ МГИНСКАЯ ШКОЛА-ИНТЕРНАТ,РЕАЛИЗУЮЩАЯ АДАПТИРОВАННЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ ДЛЯ ДЕТЕЙ С НАРУШЕНИЯМИ ЗРЕНИЯ",
									cri: "46",
									contracts: 415,
									sum: "1,4",
									sumUnit: "тыс. руб"
								},
								{
									value: 98,
									name: "ПАО 'СОВКОМБАНК'",
									cri: "46",
									contracts: "415",
									sum: "1,4",
									sumUnit: "млрд. руб"
								}
							]
						},

						topContractsData: [
							{ contract: "0816300017019000088", cri: "66.7" },
							{ contract: "0816300017019000160", cri: "15" },
							{ contract: "0345200017019000018", cri: "2" }
						],

						criCompositionData: {
							actualData: [[20], [75], [5]]
						},

						winRate: {
							actualData: [
								{
									value: 28,
									name: "ДРУГИЕ"
								},
								{
									value: 17,
									name: "ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ"
								},
								{
									value: 15,
									name: "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
								},
								{
									value: 6,
									name:
										"МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ 'УПРАВЛЕНИЕ МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТЬЮ И ЗАКУПКАМИ НЕРЮНГРИНСКОГО РАЙОНА'"
								},
								{
									value: 9,
									name: "ПАО 'СОВКОМБАНК'"
								}
							]
						}
					};
					store.commit("API_DATA_SUCCES", payload);
				})
				.catch(error => {
					store.commit("API_DATA_FAILURE", error);
				});
		},

		getCompanyList(store, payload) {
			// if (payload !== "") {
			// 	store.commit("API_SEARCH_PENDING");

			// 	setTimeout(() => {
			// 		const list = [
			// 			"AO 'Р-Фарм'",
			// 			"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
			// 			"ООО 'Инвестиционное агенство'",
			// 			"ПОА 'Совкомбанк'",
			// 			"OOO 'БТЕ'"
			// 		];

			// 		store.commit("API_SEARCH_SUCCES", payload);
			// 		this.options = this.list.filter(item => {
			// 			return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
			// 		});
			// 	}, 200);
			// } else {
			// 	// this.options = [];
			// }

			let promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("response");
				}, 2000);
			});
			return promise
				.then(response => {
					store.commit("API_SEARCH_SUCCES", payload);
				})

				.catch(error => {
					store.commit("API_DATA_FAILURE", error);
				});
		}
	}
});
