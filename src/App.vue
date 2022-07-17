<template>
	<div id="app">
		<v-app-router />
		<v-snackbar-container />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VSnackbarContainer } from '@/components/Snackbar';

import VAppRouter from './AppRouter.vue';

export default Vue.extend({
	components: { VAppRouter, VSnackbarContainer },
});
</script>

<style>
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}
</style>
