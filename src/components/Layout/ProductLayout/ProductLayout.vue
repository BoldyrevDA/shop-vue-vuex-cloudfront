<template>
	<v-app>
		<v-product-header :cartCountBadge="cartCountBadge"></v-product-header>

		<v-main>
			<v-container class="px-0 py-0" fluid>
				<slot></slot>
			</v-container>
		</v-main>

		<v-footer dark padless class="align-center">
			<v-card class="flex" flat tile>
				<v-card-title class="teal">
					<strong class="subheading">
						Get connected with us on social networks!
					</strong>

					<v-spacer></v-spacer>

					<v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
						<v-icon size="24px">
							{{ icon }}
						</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text class="py-2 white--text text-center">
					Copyright ©
					{{ $t('app.title') }}
					{{ currentDate }}
				</v-card-text>
				<v-card-text class="py-2 white--text text-center">
					<v-app-version :value="appVersion" />
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import VProductHeader from './ui/ProductHeader.vue';
import { VAppVersion } from '@/libs/version';

const APP_VERSION = process.env.VUE_APP_VERSION;

export default Vue.extend({
	name: 'ProductLayout',
	props: {
		cartCountBadge: Number,
	},
	data: () => ({
		currentDate: `${new Date().getFullYear()}.`,
		appVersion: APP_VERSION,
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
	components: { VProductHeader, VAppVersion },
});
</script>
