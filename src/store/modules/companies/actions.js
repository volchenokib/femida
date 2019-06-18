export function getCompanyData(store, payload) {
	store.commit("API_DATA_PENDING");

	axios
		.get("https://femida-f90e5.firebaseio.com/company.json") // + "payload"
		// .get(
		// 	"http://anticor.ecotomsk.com:5002/" + payload.type + "?name=" + payload.company + "&region=" + payload.region
		// )
		// .get(
		// 	'http://192.168.100.194:5002/' +
		// 		payload.type +
		// 		'?name=' +
		// 		payload.company +
		// 		'&region=' +
		// 		payload.region
		// )
		.then(response => {
			store.commit("API_DATA_COMPANY_SUCCES", response.data);
		})
		.catch(error => {
			store.commit("API_DATA_FAILURE", error);
			console.log("error", error);
		});
}
