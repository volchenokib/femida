import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import companies from "./modules/companies";
import regions from "./modules/regions";
import relations from "./modules/relations";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		companies,
		regions,
		relations
	}
});
