import axios from 'axios';

export function getCompanyData({ commit }) {
	commit('API_DATA_PENDING');

	axios
		.get('https://femida-f90e5.firebaseio.com/company.json') // + "payload"

		.then(response => {
			commit('API_DATA_COMPANY_SUCCES', response.data);
			commit('API_DATA_SUCCES');
		})
		.catch(error => {
			commit('API_DATA_FAILURE', error);
			console.log('error', error);
		});
}
