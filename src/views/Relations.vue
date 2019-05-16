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
			graph: {}
		};
	},
	mounted() {
		this.initChart();
		this.renderChart();
	},
	methods: {
		initChart() {
			this.myChart = echarts.init(document.getElementById('charts'));
		},
		renderChart() {
			this.myChart.showLoading();
			this.formatOption();
		},
		formatOption() {
			let main_company_styles = {
				symbol: 'circle',
				symbolSize: 80,
				itemStyle: {
					emphasis: {
						color: '#c92e2e'
					},
					normal: {
						color: '#c92e2e',
						label: {
							textStyle: {
								// color: "#f90"
							}
						}
					}
				}
			};

			let sub_company_style = {
				symbolSize: 30,
				category: 1,
				draggable: false,
				itemStyle: {
					normal: {
						color: '#2ec7c9'
					},
					emphasis: {
						color: '#32DADD'
					}
				}
			};

			let company_data = this.$store.state.connections_companies.map(
				function(x, i) {
					if (i === 0) {
						return Object.assign({}, main_company_styles, {
							name: x
						});
					} else {
						return Object.assign({}, sub_company_style, {
							name: x
						});
					}
				}
			);
			let customers_link_style = {
				lineStyle: {
					normal: {
						color: '#d87a80',
						curveness: 0.2
					}
				},

				label: {
					normal: {
						textStyle: {
							color: '#d87a80'
						},
						formatter: '{c}'
					}
				},

				symbol: ['arrow', 'arrow'],
				symbolSize: [10, 10]
			};

			let capital_link_style = {
				lineStyle: {
					normal: {
						color: '#9a7fd1',
						curveness: 0.2
					}
				},
				label: {
					normal: {
						textStyle: {
							color: '#9a7fd1'
						}
					}
				}
			};
			let link_data = this.$store.state.connections_links.map(function(
				x
			) {
				if (x.name === '% в уставном капитале') {
					return Object.assign({}, capital_link_style, x);
				} else {
					return Object.assign({}, customers_link_style, x);
				}
			});

			this.option = {
				// title: {
				//   text: "Graph"
				// },
				legend: {
					x: 'center',
					// y: "bottom",
					bottom: 20,
					selectedMode: false,
					data: ['% общих заказчиков', '% в уставном капитале']
				},
				// tooltip: {},
				animationDurationUpdate: 2500,
				animationEasingUpdate: 'quinticInOut',
				series: [
					{
						name: 'graph',
						type: 'graph',
						layout: 'force',
						symbol: 'circle',
						symbolSize: 50,
						roam: true, //drag and zoom
						edgeSymbol: ['arrow', 'arrow'],
						edgeSymbolSize: [10, 0],
						focusNodeAdjacency: true, // blur
						// hoverAnimation: false,
						edgeLabel: {
							normal: {
								show: true,
								textStyle: {
									fontSize: 12
								},
								formatter: '{c}'
							}
						},

						categories: [
							{
								name: '% общих заказчиков',
								itemStyle: {
									normal: {
										color: '#d87a80'
									}
								}
							},
							{
								name: '% в уставном капитале',
								itemStyle: {
									normal: {
										color: '#9a7fd1'
									}
								}
							}
						],

						lineStyle: {
							normal: {
								opacity: 1,
								width: 2
								// curveness: 0
							}
						},

						// company name
						label: {
							normal: {
								color: '#606266',
								fontSize: 10,
								position: 'top',
								show: true
							}
						},

						force: {
							// size
							repulsion: 10000,
							layoutAnimation: false
						},

						data: company_data,

						links: link_data
					}
				]
			};
			this.myChart.hideLoading();
			this.myChart.setOption(this.option, true);
		}
	}
};
</script>
<style scoped>
.relations {
	position: relative;
	height: 100%;
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