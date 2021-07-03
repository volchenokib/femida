<template>
	<el-form class="custom-form" ref="form" :model="form" value-key="value">
		<el-form-item label="Выбор региона">
			<el-select
				class="custom-form__item"
				v-model="form.region"
				no-match-text="No data"
				:disabled="isDisable"
				@change="getNewData"
				default-first-option
				filterable
			>
				<el-option
					v-for="region in this.$store.state.regions"
					:key="region.index"
					:label="region.label"
					:value="region.value"
				/>
			</el-select>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				region: ""
			}
		};
	},

	created() {
		// set default value
		this.form.region = "Алтайский край";
		this.$store.dispatch("getDashboardData", this.form.region);
	},

	computed: {
		isDisable() {
			return this.$store.getters.getInputState;
		}
	},

	methods: {
		getNewData(region) {
			this.form.region = region;
			this.$store.dispatch("getDashboardData", this.form.region);
		}
	}
};
</script>

<style scoped <style lang="scss" scoped>
.custom-form {
	padding: 0 10px !important;
	text-align: left;
	&__item {
		width: 100%;
	}
}
</style>
