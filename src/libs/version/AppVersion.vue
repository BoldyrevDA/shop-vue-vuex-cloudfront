<template>
	<span class="version"> {{ appVersion }} </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		value: String,
		bottomRightCorner: Boolean,
	},
	computed: {
		appVersion() {
			return `App ver. ${this.value || 0}`;
		},
	},
});
</script>
