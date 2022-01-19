import Vue from 'vue';
import Vuex from 'vuex';

import companies from './modules/companies';
import common from './modules/common';
import relations from './modules/relations';
// import regions from './store/modules/regions';
// import relations from './store/modules/relations';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		namespaced: true,
		common,
		companies,
		relations
		// regions,
		// relations
	}
});
