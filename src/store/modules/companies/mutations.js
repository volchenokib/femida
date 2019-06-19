export function API_DATA_COMPANY_SUCCES(state, payload) {
	// console.log('state', state);
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
			value: Math.round(item.percent)
		};
		return mapItem;
	});

	// lineChart start
	const dataForActualOne = Object.keys(payload.cri_dynamic);
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

	const dataForMonthOne = Object.keys(payload.cri_dynamic);
	const dataForMonthTwo = dataForMonthOne.map(month => {
		if (month == 1) {
			return 'Январь';
		}
		if (month == 2) {
			return 'Февраль';
		}
		if (month == 3) {
			return 'Март';
		}
		if (month == 4) {
			return 'Апрель';
		}
		if (month == 5) {
			return 'Май';
		}
		if (month == 6) {
			return 'Июнь';
		}
		if (month == 7) {
			return 'Июль';
		}
		if (month == 8) {
			return 'Август';
		}
		if (month == 9) {
			return 'Сентябрь';
		}
		if (month == 10) {
			return 'Октябрь';
		}
		if (month == 11) {
			return 'Ноябрь';
		}
		if (month == 12) {
			return 'Декабрь';
		}
	});
	state.lineChartDataCompany.month = dataForMonthTwo;
	// lineChart end

	state.options = [];
}
