export function API_DATA_PENDING(state) {
	state.data.isLoding = true;
	state.input.isDisable = true;
}

export function API_DATA_SUCCES(state) {
	state.data.isLoding = false;
	state.input.isDisable = false;
	state.errorMsg = false;
}

export function API_DATA_FAILURE(state) {
	state.errorMsg = true;
	// state.data.isLoding = false;
	state.input.isDisable = false;
}
