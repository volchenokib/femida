import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isCustomer: true,
		errorMsg: false,
		data: {
			isLoding: false
		},
		input: {
			isDisable: false
		},
		dashboard: null,

		regions: [
			{
				value: ' ',
				label: 'Все регионы'
			},
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

		panelData: {},
		panelDataCompany: {},

		lineChartData: {
			actualData: [],
			expectedData: []
		},

		lineChartDataCompany: {
			actualData: [],
			expectedData: []
		},

		lineChartIndexData: {
			expectedData: [],
			markPoint: []
		},
		topContractsData: {},

		winRateData: {
			actualData: []
		},

		regionsRateData: {
			actualData: []
		},

		// panel group
		vendor: false,

		// pie charts at region page
		customerAmount: {
			actualData: []
		},
		vendorAmount: {
			actualData: []
		},
		criCompositionData: {
			actualData: []
		},

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
			return state.panelData.number_of_contracts;
		},
		panelDataMoney(state) {
			return Math.abs(Number(state.panelData.total_contract_value)) >= 1.0e9
				? Math.abs(Number(state.panelData.total_contract_value)) / 1.0e8 / 10
				: // Six Zeroes for Millions
				Math.abs(Number(state.panelData.total_contract_value)) >= 1.0e6
				? Math.abs(Number(state.panelData.total_contract_value)) / 1.0e6
				: // Three Zeroes for Thousands
				Math.abs(Number(state.panelData.total_contract_value)) >= 1.0e3
				? Math.abs(Number(state.panelData.total_contract_value)) / 1.0e3
				: Math.abs(Number(state.panelData.total_contract_value));
		},
		panelDataCustomers(state) {
			return state.panelData.unique_contractors;
		},
		panelDataIndex(state) {
			let percent = state.panelData.average_cri * 100;
			let round = Math.round(percent);
			return round;
		},
		panelDataRisk(state) {
			return state.panelData.risk;
		},
		// panel group component end

		// panel group company component start
		panelDataCompanyContracts(state) {
			return state.panelDataCompany.number_of_contracts;
		},
		panelDataCompanyMoney(state) {
			return Math.abs(Number(state.panelDataCompany.total_contract_value)) >=
				1.0e9
				? Math.abs(Number(state.panelDataCompany.total_contract_value)) /
						1.0e8 /
						10
				: // Six Zeroes for Millions
				Math.abs(Number(state.panelDataCompany.total_contract_value)) >= 1.0e6
				? Math.abs(Number(state.panelDataCompany.total_contract_value)) / 1.0e6
				: // Three Zeroes for Thousands
				Math.abs(Number(state.panelDataCompany.total_contract_value)) >= 1.0e3
				? Math.abs(Number(state.panelDataCompany.total_contract_value)) / 1.0e3
				: Math.abs(Number(state.panelDataCompany.total_contract_value));
		},
		panelDataCompanyCustomers(state) {
			return state.panelDataCompany.unique_customers;
		},
		panelDataCompanyVendors(state) {
			return state.panelDataCompany.unique_contractors;
		},
		panelDataCompanyIndex(state) {
			let percent = state.panelDataCompany.average_cri * 100;
			let round = Math.round(percent);
			return round;
		},
		panelDataCompanyRisk(state) {
			return state.panelDataCompany.risk;
		},
		// panel group company component end

		lineChartData(state) {
			return state.lineChartData;
		},
		lineChartDataCompany(state) {
			return state.lineChartDataCompany;
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
			state.panelData = payload.statistics;
			// state.lineChartData.expectedData = JSON.parse(payload.cri_dynamic);
			// console.log('MUT state.lineChartData:', state.lineChartData);
			// state.dashboard = payload;
			// console.log('MUT', state.dashboard);
			// let expectedData = [];

			// function fillActualData(state, payload) {
			// 	const i = 12;
			// 	let percent = payload.statistics.average_cri * 100;
			// 	let round = Math.round(percent);
			// 	let actualData = [];
			// 	while (i) actualData.push(round);
			// 	i--;
			// 	return state.lineChartData.actualData;
			// }
			// fillActualData(state, payload);
			// state.lineChartData.actualData = sth;

			// lineChart start
			const dataForActualOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			const dataForActualTwo = dataForActualOne.map(
				n => (n = payload.statistics.average_cri)
			);
			const dataForActualThree = dataForActualTwo.map(n => n * 100);
			const dataForActualFour = dataForActualThree.map(n => Math.round(n));
			state.lineChartData.actualData = dataForActualFour;

			const dataForExpectedOne = Object.values(payload.cri_dynamic);
			const dataForExpectedTwo = dataForExpectedOne.map(n => n * 100);
			const dataForExpectedThree = dataForExpectedTwo.map(n => Math.round(n));
			state.lineChartData.expectedData = dataForExpectedThree;

			// lineChart end

			// lineChartIndex start
			let lineChartIndexOne = Object.keys(
				payload.region_histogram.histogram
			).map(key => {
				return [key * 100, payload.region_histogram.histogram[key]];
			});

			state.lineChartIndexData.expectedData = lineChartIndexOne;
			state.lineChartIndexData.markPoint = [
				payload.place_in_hist.x * 100,
				payload.place_in_hist.y
			];
			// lineChartIndex end

			// pieChart region page customer start
			state.customerAmount.actualData = payload.top_customers.map(item => {
				let mapItem = {
					name: item.customer.toLowerCase(),
					value: Math.round(item.total_contract_value_percent),
					cri: Math.round(item.average_cri * 100),
					contracts: item.number_of_contracts,
					sum: item.total_contract_value,
					sumUnit: 'руб'
				};
				return mapItem;
			});
			// pieChart region page customer start end

			// pieChart region page contracts start
			state.vendorAmount.actualData = payload.top_contractors.map(item => {
				let mapItem = {
					name: item.contractor.toLowerCase(),
					value: item.total_contract_value_percent,
					cri: Math.round(item.average_cri * 100),
					contracts: item.number_of_contracts,
					sum: item.total_contract_value,
					sumUnit: 'руб'
				};
				return mapItem;
			});
			// pieChart region page contracts end

			// state.winRateData = payload.top_contracts;

			// state.dashboard = payload;
			state.data.isLoding = false;
			state.input.isDisable = false;
		},

		API_DATA_FAILURE(state, payload) {
			state.errorMsg = true;
			// state.data.isLoding = false;
			state.input.isDisable = false;
		},

		API_DATA_COMPANY_SUCCES(state, payload) {
			state.panelDataCompany = payload.statistics;
			state.winRateData.actualData = payload.top_contracts.map(item => {
				let mapItem = {
					name: item.contractor.toLowerCase(),
					value: Math.round(item.Contract_Value)
				};
				return mapItem;
			});

			state.topContractsData = payload.top_cri_contracts;

			state.criCompositionData.actualData = payload.CRI_parts.map(item => {
				let mapItem = {
					name: item.part,
					value: item.percent.toFixed(2)
				};
				return mapItem;
			});

			// lineChart start
			const dataForActualOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			const dataForActualTwo = dataForActualOne.map(
				n => (n = payload.statistics.average_cri)
			);
			const dataForActualThree = dataForActualTwo.map(n => n * 100);
			const dataForActualFour = dataForActualThree.map(n => Math.round(n));
			state.lineChartDataCompany.actualData = dataForActualFour;

			const dataForExpectedOne = Object.values(payload.cri_dynamic);
			const dataForExpectedTwo = dataForExpectedOne.map(n => n * 100);
			const dataForExpectedThree = dataForExpectedTwo.map(n => Math.round(n));
			state.lineChartDataCompany.expectedData = dataForExpectedThree;
			// lineChart end

			state.data.isLoding = false;
			state.input.isDisable = false;
			state.errorMsg = false;
		},

		API_CONNECTIONS_DATA_SUCCES(state, payload) {
			state.connections_companies = payload.companies;
			state.connections_links = payload.links;
		},

		API_SEARCH_PENDING(state) {
			state.searchLoading = true;
		},

		API_SEARCH_SUCCES(state, payload) {
			state.options = payload;
		},
		API_SEARCH_FAILURE(state, payload) {
			state.options = [];
		}
	},

	actions: {
		getSearchData(store, payload) {
			axios
				.get(
					'http://anticor.ecotomsk.com:5002/companies?type=' +
						payload.type +
						'&shortname=' +
						payload.company
				)
				// .get(
				// 	'http://192.168.100.194:5002/companies?type=' +
				// 		payload.type +
				// 		'&shortname=' +
				// 		payload.company
				// )
				.then(response => {
					store.commit('API_SEARCH_SUCCES', response.data.company_names);
				})
				.catch(error => {
					store.commit('API_SEARCH_FAILURE', error);
					console.log('error', error);
				});
		},

		getCompanyData(store, payload) {
			store.commit('API_DATA_PENDING');

			// return axios
			axios
				.get(
					'http://anticor.ecotomsk.com:5002/' +
						payload.type +
						'?name=' +
						payload.company +
						'&region=' +
						payload.region
				)
				// .get(
				// 	'http://192.168.100.194:5002/' +
				// 		payload.type +
				// 		'?name=' +
				// 		payload.company +
				// 		'&region=' +
				// 		payload.region
				// )
				.then(response => {
					store.commit('API_DATA_COMPANY_SUCCES', response.data);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
					console.log('error', error);
				});
		},

		getDashboardData(store, payload) {
			store.commit('API_DATA_PENDING');

			// return axios http://192.168.100.194:5002
			axios
				.get('http://anticor.ecotomsk.com:5002/region?region=' + payload)
				// .get('http://192.168.100.194:5002/region?region=' + payload)
				.then(response => {
					store.commit('API_DATA_SUCCES', response.data);
					console.log('response:', response.data);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
					console.log('error', error);
				});
		},

		getRelationsData(store, payload) {
			store.commit('API_DATA_PENDING');

			// return axios http://192.168.100.194:5002
			axios
				.get('http://anticor.ecotomsk.com:5002/connections?name=' + payload)
				// .get('http://192.168.100.194:5002/connections?name=' + payload)
				.then(response => {
					store.commit('API_CONNECTIONS_DATA_SUCCES', response.data);
					// console.log('response:', response.data);
				})
				.catch(error => {
					store.commit('API_DATA_FAILURE', error);
					console.log('error', error);
				});
		}
	}
});
