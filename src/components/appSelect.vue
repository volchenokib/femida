<template>
	<el-select
		class="appSelect"
		v-model="selectData"
		placeholder="Region name"
		no-match-text="No data"
		:disabled="isDisable"
		@focus="hideRegionValue"
		@blur="showRegionValue"
		@change="getData"
		filterable
	>
		<el-option
			v-for="element in optionData"
			:key="element.index"
			:label="element.label"
			:value="element.value"
		/>
	</el-select>
</template>

<script>
import { Stream } from "stream";
export default {
	props: {
		selectData: {
			type: String,
			required: true
		},
		optionData: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			tempRegionValue: ""
		};
	},

	computed: {
		isDisable() {
			return this.$store.getters.getInputState;
		}
	},

	methods: {
		getData(value) {
			this.$store.dispatch("getDashboardData", value);
		},

		// region on focus
		hideRegionValue() {
			// this.tempRegionValue = this.form.region;
			// this.form.region = "";
			// this.$store.state.regionform.region = "";
		},

		// region on blur
		showRegionValue() {
			// this.form.region = this.tempRegionValue;
			// this.tempRegionValue = "";
		}
	}
};
</script>

<style scoped <style lang="scss" scoped>
.appSelect {
	width: 100%;
}
</style>
