<template>
  <div class="relations">
    <!-- <panelRelations/> -->
    <div class="graph" id="charts" ref="chart" style="hight:100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons'); // echarts theme
// import { debounce } from "@/utils";
import panelRelations from '@/components/panelRelations.vue';
export default {
	components: {
		panelRelations
	},
	data() {
		return {
			myChart: null,
			option: {},
			graph: {
				categories: [],
				nodes: [],
				links: []
			}
		};
	},
	mounted() {
		this.$store.dispatch('getRelationsData')
		this.initChart();
		this.renderChart();
		this.$store.subscribe((mutation) => {
		
		// TODO: add unsubscribe
  		if (mutation.type === 'SET_RELATIONS_DATA') {
			const relationsData = mutation.payload.relations
			if (relationsData) {
				this.graph = relationsData
				this.setOption();
			}
  		}
		});
	},

	beforeDestroy() {
		unsubscribe()
	},

	methods: {
		initChart() {
			this.myChart = echarts.init(document.getElementById('charts'));
		},
		renderChart() {
			this.myChart.showLoading();
		},
		setOption() {
			this.option = {
				 title: {
					text: 'Les Miserables',
					subtext: 'Default layout',
					top: 'bottom',
					left: 'right'
    			},
				tooltip: {},
				legend: [
					{
						// selectedMode: 'single',
						data: this.graph.categories.map(function (a) {
						return a.name;
						})
					}
			  	],
				series: [
					{
						name: 'Les Miserables',
						type: 'graph',
						layout: 'force',
						data: this.graph.nodes,
						links: this.graph.links,
						categories: this.graph.categories,
						roam: true,
						label: {
						position: 'right'
						},
						force: {
						repulsion: 100
						}
					}
				]
			}

			console.log('this.option', this.option)


			this.myChart.hideLoading();
			this.myChart.setOption(this.option, true);
		}
	}
};
</script>

<style scoped>
.relations {
	position: relative;
	height: 100vh;
}
.graph {
	height: 100%;
	width: 100%;
}
/* #charts {
  flex: 1;
  border: 1px solid;
  box-shadow: 0 0 20px rgba(18, 208, 253, 0.5);
} */
</style>