<template>
	<el-form class="custom-form" ref="form" :model="form">
		<el-form-item label="Select a company">
			<el-select
				class="custom-form__item"
				v-model="form.company"
				placeholder="Company name"
				:remote-method="remoteMethod"
				:disabled="isDisable"
				:loading="this.$store.state.searchLoading"
				@focus="hideDefaultValue"
				@blur="showDefaultValue"
				@change="getNewData"
				default-first-option
				filterable
				remote
			>
				<el-option
					v-for="item in this.$store.state.options"
					:key="item"
					:label="item"
					:value="item"
				></el-option>
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-select>
		</el-form-item>

		<el-form-item>
			<el-radio-group
				v-model="form.type"
				:disabled="isDisable"
				@change="changeSource"
			>
				<el-radio v-model="form.type" label="customer">By customer</el-radio>
				<el-radio v-model="form.type" label="contractor">By supplier</el-radio>
			</el-radio-group>
		</el-form-item>

		<el-form-item label="Select a region">
			<el-select
				class="custom-form__item"
				v-model="form.region"
				placeholder="Region name"
				no-match-text="No data"
				:disabled="isDisable"
				@focus="hideRegionValue"
				@blur="showRegionValue"
				@change="getNewData"
				filterable
			>
				<el-option
					v-for="region in this.$store.state.common.regions"
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
	name: "",
	components: {},
	data() {
		return {
			tempCompanyValue: "",
			tempRegionValue: "",
			form: {
				company: "",
				type: "customer",
				region: ""
			}
		};
	},

	created() {
		// set default value
		this.form.company = "Hopintech";
		this.form.region = "";

		this.$store.dispatch("getCompanyData", this.form);
	},

	computed: {
		searchLoading() {
			return this.$store.getters.searchLoading;
		},

		isDisable() {
			return this.$store.getters.getInputState;
		}
	},

	methods: {
		changeSource() {
			this.$store.state.vendor = !this.$store.state.vendor;
			this.$store.dispatch("getCompanyData", this.form);
		},

		getNewData() {
			this.$store.dispatch("getCompanyData", this.form);
		},

		// company on focus
		hideDefaultValue() {
			this.$store.state.options = [];
			this.tempCompanyValue = this.form.company;
			this.form.company = "";
			this.$store.state.options.push(this.tempCompanyValue);
		},

		// company on blur
		showDefaultValue(e) {
			this.form.company = this.tempCompanyValue;
			this.tempCompanyValue = "";
		},

		// region on focus
		hideRegionValue() {
			this.tempRegionValue = this.form.region;
			this.form.region = "";
		},

		// region on blur
		showRegionValue() {
			this.form.region = this.tempRegionValue;
			this.tempRegionValue = "";
		},

		remoteMethod(query) {
			if (query.length >= 5) {
				this.$store.state.searchLoading = true;

				let searchForm = {
					company: query,
					type: this.form.type,
					region: this.form.region
				};

				this.$store.dispatch("getSearchData", searchForm);

				this.$store.state.searchLoading = false;
			} else {
				this.$store.state.options = [];
			}
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

.autocomplete-container {
	min-width: 340px;
}
</style>
