export function panelDataCompanyContracts(state) {
	return state.panelDataCompany.number_of_contracts;
}

export function panelDataCompanyDesc(state) {
	return state.panelDataCompany.total_contract_value;
}

export function panelDataCompanyMoney(state) {
	return Math.abs(Number(state.panelDataCompany.total_contract_value)) >= 1.0e9
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
}

export function panelDataCompanyCustomers(state) {
	return state.panelDataCompany.unique_customers;
}

export function panelDataCompanyVendors(state) {
	return state.panelDataCompany.unique_contractors;
}

export function panelDataCompanyIndex(state) {
	let percent = state.panelDataCompany.average_cri * 100;
	let round = Math.round(percent);
	return round;
}

export function panelDataCompanyRisk(state) {
	return state.panelDataCompany.risk;
}

export function winRateData(state) {
	return state.winRateData;
}

export function criCompositionData(state) {
	return state.criCompositionData;
}

export function regionsRateData(state) {
	return state.regionsRateData;
}

export function lineChartDataCompany(state) {
	return state.lineChartDataCompany;
}
