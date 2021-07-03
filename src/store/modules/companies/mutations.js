export function API_DATA_COMPANY_SUCCES(state, payload) {
	// console.log('state', state);
	state.panelDataCompany = payload.statistics;
	state.winRateData.actualData = payload.top_contracts.map((item) => {
		let mapItem = {
			name: item.contractor.toLowerCase(),
			value: Math.round(item.Contract_Value)
		};
		return mapItem;
	});

	state.topContractsData = payload.top_cri_contracts;

	state.criCompositionData.actualData = payload.CRI_parts.map((item) => {
		let mapItem = {
			name: item.part,
			value: Math.round(item.percent)
		};
		return mapItem;
	});

	// lineChart start
	const dataForActualOne = Object.keys(payload.cri_dynamic);
	const dataForActualTwo = dataForActualOne.map(
		(n) => (n = payload.statistics.average_cri)
	);
	const dataForActualThree = dataForActualTwo.map((n) => n * 100);
	const dataForActualFour = dataForActualThree.map((n) => Math.round(n));
	state.lineChartDataCompany.actualData = dataForActualFour;

	const dataForExpectedOne = Object.values(payload.cri_dynamic);
	const dataForExpectedTwo = dataForExpectedOne.map((n) => n * 100);
	const dataForExpectedThree = dataForExpectedTwo.map((n) => Math.round(n));
	state.lineChartDataCompany.expectedData = dataForExpectedThree;

	const dataForMonthOne = Object.keys(payload.cri_dynamic);
	const dataForMonthTwo = dataForMonthOne.map((month) => {
		if (month == 1 || month == 0) {
			return "January";
		}
		if (month == 2) {
			return "February";
		}
		if (month == 3) {
			return "March";
		}
		if (month == 4) {
			return "April";
		}
		if (month == 5) {
			return "May";
		}
		if (month == 6) {
			return "June";
		}
		if (month == 7) {
			return "July";
		}
		if (month == 8) {
			return "August";
		}
		if (month == 9) {
			return "September";
		}
		if (month == 10) {
			return "October";
		}
		if (month == 11) {
			return "November";
		}
		if (month == 12) {
			return "December";
		}
	});
	state.lineChartDataCompany.month = dataForMonthTwo;
	// lineChart end

	state.options = [];
}
