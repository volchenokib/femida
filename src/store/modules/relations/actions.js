import axios from 'axios';

export function getRelationsData({ commit }) {
	commit('API_DATA_PENDING');

	axios
		.get('https://femida-f90e5.firebaseio.com/company.json')

		.then(response => {
			commit('SET_RELATIONS_DATA', response.data);
		})
		.catch(error => {
			commit('API_DATA_FAILURE', error);
			console.log('error', error);
		});
}
