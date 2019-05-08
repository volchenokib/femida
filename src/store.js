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
		dashboard: null,

		regions: [
			{
				value: 'Алтайский край',
				label: 'Алтайский край'
			},
			{
				value: 'Амурская обл',
				label: 'Амурская область'
			},
			{
				value: 'Архангельская обл',
				label: 'Архангельская область'
			},
			{
				value: 'Астраханская обл',
				label: 'Астраханская область'
			},
			{
				value: 'Белгородская обл',
				label: 'Белгородская область'
			},
			{
				value: 'Брянская обл',
				label: 'Брянская область'
			},
			{
				value: 'Владимирская обл',
				label: 'Владимирская область'
			},
			{
				value: 'Волгоградская обл',
				label: 'Волгоградская область'
			},
			{
				value: 'Вологодская обл',
				label: 'Вологодская область'
			},
			{
				value: 'Воронежская обл',
				label: 'Воронежская область'
			},
			{
				value: 'Москва',
				label: 'г. Москва'
			},
			{
				value: 'Еврейская Аобл',
				label: 'Еврейская автономная область'
			},
			{
				value: 'Забайкальский край',
				label: 'Забайкальский край'
			},
			{
				value: 'Ивановская обл',
				label: 'Ивановская область'
			},
			{
				value: 'Байконур г',
				label: 'г. Байконур'
			},
			{
				value: 'Иркутская обл',
				label: 'Иркутская область'
			},
			{
				value: 'Кабардино-Балкарская Респ',
				label: 'Кабардино-Балкарская Республика'
			},
			{
				value: 'Калининградская обл',
				label: 'Калининградская область'
			},
			{
				value: 'Калужская обл',
				label: 'Калужская область'
			},
			{
				value: 'Камчатский край',
				label: 'Камчатский край'
			},
			{
				value: 'Карачаево-Черкесская Респ',
				label: 'Карачаево-Черкесская Республика'
			},
			{
				value: 'Кемеровская обл',
				label: 'Кемеровская область'
			},
			{
				value: 'Кировская обл',
				label: 'Кировская область'
			},
			{
				value: 'Костромская обл',
				label: 'Костромская область'
			},
			{
				value: 'Краснодарский край',
				label: 'Краснодарский край'
			},
			{
				value: 'Красноярский край',
				label: 'Красноярский край'
			},
			{
				value: 'Курганская обл',
				label: 'Курганская область'
			},
			{
				value: 'Курская обл',
				label: 'Курская область'
			},
			{
				value: 'Ленинградская обл',
				label: 'Ленинградская область'
			},
			{
				value: 'Липецкая обл',
				label: 'Липецкая область'
			},
			{
				value: 'Магаданская обл',
				label: 'Магаданская область'
			},
			{
				value: 'Московская обл',
				label: 'Московская область'
			},
			{
				value: 'Мурманская обл',
				label: 'Мурманская область'
			},
			{
				value: 'Ямало-Ненецкий АО',
				label: 'Ненецкий автономный округ'
			},
			{
				value: 'Нижегородская обл',
				label: 'Нижегородская область'
			},
			{
				value: 'Новгородская обл',
				label: 'Новгородская область'
			},
			{
				value: 'Новосибирская обл',
				label: 'Новосибирская область'
			},
			{
				value: 'Омская обл',
				label: 'Омская область'
			},
			{
				value: 'Оренбургская обл',
				label: 'Оренбургская область'
			},
			{
				value: 'Орловская обл',
				label: 'Орловская область'
			},
			{
				value: 'Пензенская обл',
				label: 'Пензенская область'
			},
			{
				value: 'Пермский край',
				label: 'Пермский край'
			},
			{
				value: 'Приморский край',
				label: 'Приморский край'
			},
			{
				value: 'Псковская обл',
				label: 'Псковская область'
			},
			{
				value: 'Псковская обл',
				label: 'Псковская область'
			},
			{
				value: 'Адыгея Респ',
				label: 'Республика Адыгея (Адыгея)'
			},
			{
				value: 'Алтай Респ',
				label: 'Республика Алтай'
			},
			{
				value: 'Башкортостан Респ',
				label: 'Республика Башкортостан'
			},
			{
				value: 'Бурятия Респ',
				label: 'Республика Бурятия'
			},
			{
				value: 'Дагестан Респ',
				label: 'Республика Дагестан'
			},
			{
				value: 'Ингушетия Респ',
				label: 'Республика Ингушетия'
			},
			{
				value: 'Калмыкия Респ',
				label: 'Республика Калмыкия'
			},
			{
				value: 'Карелия Респ',
				label: 'Республика Карелия'
			},
			{
				value: 'Коми Респ',
				label: 'Республика Коми'
			},
			{
				value: 'Крым Респ',
				label: 'Республика Крым'
			},
			{
				value: 'Марий Эл Респ',
				label: 'Республика Марий Эл'
			},
			{
				value: 'Мордовия Респ',
				label: 'Республика Мордовия'
			},
			{
				value: 'Якутия Респ',
				label: 'Республика Саха (Якутия)'
			},
			{
				value: 'Северная Осетия - Алания Респ',
				label: 'Республика Северная Осетия - Алания'
			},
			{
				value: 'Татарстан Респ',
				label: 'Республика Татарстан (Татарстан)'
			},
			{
				value: 'Тыва Респ',
				label: 'Республика Тыва'
			},
			{
				value: 'Хакасия Респ',
				label: 'Республика Хакасия'
			},
			{
				value: 'Ростовская обл',
				label: 'Ростовская область'
			},
			{
				value: 'Рязанская обл',
				label: 'Рязанская область'
			},
			{
				value: 'Самарская обл',
				label: 'Самарская область'
			},
			{
				value: 'Санкт-Петербург',
				label: 'Санкт-Петербург'
			},
			{
				value: 'Саратовская обл',
				label: 'Саратовская область'
			},
			{
				value: 'Сахалинская обл',
				label: 'Сахалинская область'
			},
			{
				value: 'Свердловская обл',
				label: 'Свердловская область'
			},
			{
				value: 'Севастополь г',
				label: 'Севастополь'
			},
			{
				value: 'Смоленская обл',
				label: 'Смоленская область'
			},
			{
				value: 'Ставропольский край',
				label: 'Ставропольский край'
			},
			{
				value: 'Тамбовская обл',
				label: 'Тамбовская область'
			},
			{
				value: 'Тверская обл',
				label: 'Тверская область'
			},
			{
				value: 'Томская обл',
				label: 'Томская область'
			},
			{
				value: 'Тульская обл',
				label: 'Тульская область'
			},
			{
				value: 'Тюменская обл',
				label: 'Тюменская область'
			},
			{
				value: 'Удмуртская Респ',
				label: 'Удмуртская Республика'
			},
			{
				value: 'Ульяновская обл',
				label: 'Ульяновская область'
			},
			{
				value: 'Хабаровский край',
				label: 'Хабаровский край'
			},
			{
				value: 'Ханты-Мансийский Автономный округ - Югра АО',
				label: 'Ханты-Мансийский автономный округ - Югра'
			},
			{
				value: 'Челябинская обл',
				label: 'Челябинская область'
			},
			{
				value: 'Чеченская Респ',
				label: 'Чеченская Республика'
			},
			{
				value: 'Чувашская Республика - Чувашия',
				label: 'Чувашская Республика - Чувашия'
			},
			{
				value: 'Чукотский АО',
				label: 'Чукотский автономный округ'
			},
			{
				value: 'Ненецкий АО',
				label: 'Ямало-Ненецкий автономный округ'
			},
			{
				value: 'Ярославская обл',
				label: 'Ярославская область'
			}
		],

		// panelData: {},
		// lineChartData: {},
		// lineChartIndexData: {},
		// topContractsData: {},
		// winRateData: {},

		// panel group
		vendor: false,

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
		headerTitle: 'Анализ по компании'
	},
	getters: {
		getDataState(state) {
			return state.data.isLoding;
		},
		getInputState(state) {
			return state.input.isDisable;
		},

		// panel group component start
		panelDataContracts(state) {
			return state.dashboard.statistics.number_of_contracts;
		},
		panelDataMoney(state) {
			let step1 = Math.round(state.dashboard.statistics.total_contract_value);
			console.log('step1', step1);

			let step2 = parseInt(step1 / 1000000);
			console.log('step2', step2);

			return Math.round(state.dashboard.statistics.total_contract_value);
		},
		panelDataCustomers(state) {
			return state.dashboard.statistics.unique_customers;
		},
		panelDataIndex(state) {
			let percent = state.dashboard.statistics.average_cri * 100;
			let round = Math.round(percent);
			return round;
		},
		panelDataRisk(state) {
			return state.dashboard.statistics.risk;
		},
		// panel group component end

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
		regionsRateData(state) {
			return state.regionsRateData;
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
			// state.panelData = payload.panelData;
			// state.lineChartData = payload.lineChartData;
			// state.lineChartIndexData = payload.lineChartIndexData;
			// state.customerAmount = payload.customerAmount;
			// state.vendorAmount = payload.vendorAmount;
			// state.topContractsData = payload.topContractsData;
			// state.criCompositionData = payload.criCompositionData;
			// state.winRateData = payload.winRate;
			// state.regionsRateData = payload.regionsRate;
			state.dashboard = payload;
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
			store.commit('API_DATA_PENDING');

			console.log('getDashboardData', payload);

			// return axios
			axios
				.get('http://192.168.100.194:5001/region?region=' + payload)
				.then(response => {
					store.commit('API_DATA_SUCCES', response.data);
					console.log('response', response.data);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
					console.log('error', error);
				});

			// let promise = new Promise((resolve, reject) => {
			// 	setTimeout(() => {
			// 		resolve('response');
			// 	}, 2000);
			// });

			// return promise
			// 	.then(response => {
			// 		let payload = {
			// 			panelData: {
			// 				contracts: 6928,
			// 				money: 12.8,
			// 				customers: 1964,
			// 				cri: 43,
			// 				wins: 18,
			// 				risk: 0.2
			// 			},

			// 			lineChartData: {
			// 				actualData: [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43],
			// 				expectedData: [55, 37, 50, 43, 40, 100, 35, 50, 41, 48, 42, 47]
			// 			},

			// 			lineChartIndexData: {
			// 				expectedData: [
			// 					[0, 0],
			// 					[15, 0.06],
			// 					[20, 0.1],
			// 					[30, 0.13],
			// 					[40, 0.15],
			// 					[50, 0.11],
			// 					[55, 0]
			// 				],
			// 				markPoint: [20, 0.1],
			// 				titleValue: '75'
			// 			},

			// 			customerAmount: {
			// 				actualData: [
			// 					{
			// 						value: 60,
			// 						name: 'ДРУГИЕ',
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'млн. руб'
			// 					},
			// 					{
			// 						value: 240,
			// 						name: 'ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ',
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'тыс. руб'
			// 					},
			// 					{
			// 						value: 149,
			// 						name:
			// 							"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'тыс. руб'
			// 					},
			// 					{
			// 						value: 100,
			// 						name: "УМП 'СПЕЦАВТОХОЗЯЙСТВО Г.ТОМСКА'",
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'млн. руб'
			// 					},
			// 					{
			// 						value: 59,
			// 						name: "ПАО 'СОВКОМБАНК'",
			// 						cri: '15',
			// 						contracts: '2',
			// 						sum: '0,8',
			// 						sumUnit: 'млн. руб'
			// 					}
			// 				]
			// 			},

			// 			vendorAmount: {
			// 				actualData: [
			// 					{
			// 						value: 150,
			// 						name: 'ДРУГИЕ',
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'тыс. руб'
			// 					},
			// 					{
			// 						value: 205,
			// 						name:
			// 							"МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ 'УПРАВЛЕНИЕ МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТЬЮ И ЗАКУПКАМИ НЕРЮНГРИНСКОГО РАЙОНА'",
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'млн. руб'
			// 					},
			// 					{
			// 						value: 280,
			// 						name:
			// 							"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: 1.4,
			// 						sumUnit: 'млн. руб'
			// 					},
			// 					{
			// 						value: 89,
			// 						name:
			// 							'ГОСУДАРСТВЕННОЕ КАЗЕННОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ЛЕНИНГРАДСКОЙ ОБЛАСТИ МГИНСКАЯ ШКОЛА-ИНТЕРНАТ,РЕАЛИЗУЮЩАЯ АДАПТИРОВАННЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ ДЛЯ ДЕТЕЙ С НАРУШЕНИЯМИ ЗРЕНИЯ',
			// 						cri: '46',
			// 						contracts: 415,
			// 						sum: '1,4',
			// 						sumUnit: 'тыс. руб'
			// 					},
			// 					{
			// 						value: 98,
			// 						name: "ПАО 'СОВКОМБАНК'",
			// 						cri: '46',
			// 						contracts: '415',
			// 						sum: '1,4',
			// 						sumUnit: 'млрд. руб'
			// 					}
			// 				]
			// 			},

			// 			topContractsData: [
			// 				{ contract: '0816300017019000088', cri: '66.7' },
			// 				{ contract: '0816300017019000160', cri: '15' },
			// 				{ contract: '0345200017019000018', cri: '2' }
			// 			],

			// 			criCompositionData: {
			// 				actualData: [[20], [75], [5]]
			// 			},

			// 			winRate: {
			// 				actualData: [
			// 					{
			// 						value: 53,
			// 						name: 'ДРУГИЕ'
			// 					},
			// 					{
			// 						value: 17,
			// 						name: 'ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ'
			// 					},
			// 					{
			// 						value: 15,
			// 						name:
			// 							"ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
			// 					},
			// 					{
			// 						value: 6,
			// 						name:
			// 							"МУНИЦИПАЛЬНОЕ КАЗЕННОЕ УЧРЕЖДЕНИЕ 'УПРАВЛЕНИЕ МУНИЦИПАЛЬНОЙ СОБСТВЕННОСТЬЮ И ЗАКУПКАМИ НЕРЮНГРИНСКОГО РАЙОНА'"
			// 					},
			// 					{
			// 						value: 9,
			// 						name: "ПАО 'СОВКОМБАНК'"
			// 					}
			// 				]
			// 			},
			// 			regionsRate: {
			// 				actualData: [
			// 					{
			// 						value: 15,
			// 						name: 'Республика Адыгея(Адыгея)'
			// 					},
			// 					{
			// 						value: 19,
			// 						name: 'Город Москва'
			// 					},
			// 					{
			// 						value: 14,
			// 						name: 'Республика Алтай'
			// 					},
			// 					{
			// 						value: 9,
			// 						name: 'Республика Бурятия'
			// 					},
			// 					{
			// 						value: 43,
			// 						name: 'Другие'
			// 					}
			// 				]
			// 			}
			// 		};
			// 		store.commit('API_DATA_SUCCES', payload);
			// 	})
			// 	.catch(error => {
			// 		store.commit('API_DATA_FAILURE', error);
			// 	});
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
					resolve('response');
				}, 2000);
			});
			return promise
				.then(response => {
					store.commit('API_SEARCH_SUCCES', payload);
				})

				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
				});
		}
	}
});
