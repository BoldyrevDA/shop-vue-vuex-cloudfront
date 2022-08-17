import Vue from 'vue';

import App from './App.vue';

import { connectVuetify } from './plugins/vuetify';
import { connectRouter } from './plugins/vue-router';
import { connecti18n } from './plugins/vue-i18n';

import store from './store/store';
import axios from 'axios';

axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error?.response?.status === 403 || error?.response?.status === 401) {
			store.dispatch('snackbar/showErrorSnackber', {
				message: error.message,
			});
		}

		return Promise.reject(error);
	}
);

const createApp = () => {
	Vue.config.productionTip = false;

	return new Vue({
		el: '#app',
		//
		router: connectRouter(Vue),
		vuetify: connectVuetify(Vue),
		i18n: connecti18n(Vue),
		store,
		//
		render: h => h(App),
	});
};

createApp();
