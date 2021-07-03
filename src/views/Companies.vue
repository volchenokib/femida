<template>
	<div class="company">
		<panelCompany />

		<div class="company__charts-layout">
			<div class="company__container-left">
				<companyPie
					:class="'chart'"
					:chartData="winRateData"
					:labelFormatter="winrateLabel"
					title="Supplier win rate per year"
					:height="'480px'"
					v-if="!this.$store.state.vendor"
				/>

				<companyPie
					:class="'chart'"
					:chartData="winRateData"
					:formatter="formatterRegions"
					title="Distribution of the amount of contracts by region"
					:height="'480px'"
					v-if="this.$store.state.vendor"
				/>

				<br />

				<indexDynamic
					:title="
						this.$store.state.vendor
							? 'CRI dynamics for a given supplier'
							: 'CRI dynamics for a given customer'
					"
					:chartData="lineChartDataCompany"
					:height="'220px'"
				/>
			</div>

			<div class="company__container-right">
				<companyPie
					:class="'chart'"
					:chartData="criCompositionData"
					:labelFormatter="indexLabel"
					:tooltipFormatter="indexTooltip"
					:showTooltip="true"
					title="CRI components"
					:height="'480px'"
					:width="'94%'"
				/>

				<br />

				<topContractsTable />
			</div>
		</div>

		<!-- error message -->
		<el-alert
			class="errorMsg"
			title="No data"
			type="error"
			effect="light"
			v-if="this.$store.state.errorMsg"
		></el-alert>
	</div>
</template>

<script>
import panelCompany from "@/components/panelCompany.vue";
import lineChartCompany from "@/components/lineChartCompany";
import topContractsTable from "@/components/topContractsTable";
import indexDynamic from "@/components/indexDynamic";
import companyPie from "@/components/companyPie";

export default {
	name: "home",
	components: {
		panelCompany,
		lineChartCompany,
		topContractsTable,
		companyPie,
		indexDynamic
	},
	created() {
		// this.$store.dispatch(
		//   "getRelationsData",
		//   'ЗАКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "МОЛКОМБИНАТ "АДЫГЕЙСКИЙ"'
		// );
	},
	data() {
		return {
			winrateLabel: ["{d|{d}%}", "контрактов: {c|{c}}"].join("\n"),
			formatterRegions: ["{d|{d}%}"].join("\n"),
			indexTooltip: "{b}",
			indexLabel: "{c|{c}%}"
		};
	},

	computed: {
		lineChartDataCompany() {
			return this.$store.getters.lineChartDataCompany;
		},
		criCompositionData() {
			return this.$store.getters.criCompositionData;
		},
		winRateData() {
			return this.$store.getters.winRateData;
		},
		regionsRateData() {
			return this.$store.getters.regionsRateData;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.company {
	margin: 0 20px 0 10px;
	position: relative;
	&__charts-layout {
		display: flex;
		justify-content: space-between;
	}

	&__container-left {
		position: relative;
		width: 60%;
	}

	&__container-right {
		position: relative;
		width: 36%;
	}
	&__container-full {
		// padding: 0 20px;
		position: relative;
		width: 100%;
	}
}

.chart {
	background-color: #fff;
	border: $border;
	border-radius: $border-radius;
	box-shadow: box-shadow;
	padding: 15px;
}

.chart-bar {
	background-color: #fff;
	border: $border;
	border-radius: $border-radius;
	box-shadow: box-shadow;
}

.errorMsg {
	background-color: rgba(0, 0, 0, 0.6);
	width: 200px;
	padding: 20px;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 99999;
}
</style>
