<template>
  <div class="relations">
    <div class="graph" id="charts" ref="chart" style="hight:100%;"></div>
  </div>
</template>




<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";
export default {
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
      this.myChart = echarts.init(document.getElementById("charts"));
    },
    renderChart() {
      this.myChart.showLoading();
      this.formatOption();
    },
    formatOption() {
      this.option = {
        title: {
          text: "Graph 简单示例"
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            categories: [
              {
                name: "sth",
                itemStyle: {
                  normal: {
                    color: "coral"
                  }
                }
              },
              {
                name: "sth2",
                itemStyle: {
                  normal: {
                    color: "green"
                  }
                }
              }
            ],
            type: "graph",
            layout: "force",
            symbol: "circle",
            symbolSize: 100,
            roam: false, //drag
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [0, 10],
            //
            focusNodeAdjacency: true, // blur
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20
                },
                formatter: "{c}"
              }
            },
            categories: [
              {
                name: "家人",
                itemStyle: {
                  normal: {
                    color: "#009800"
                  }
                }
              },
              {
                name: "朋友",
                itemStyle: {
                  normal: {
                    color: "#4592FF"
                  }
                }
              }
            ],
            lineStyle: {
              normal: {
                opacity: 1,
                width: 2,
                curveness: 0
              }
            },
            // 圆圈内的文字
            label: {
              normal: {
                show: true
              }
            },
            force: {
              repulsion: 5000
            },
            data: [
              {
                name: "ПАО СОВКОМБАНК",
                // symbol:
                //   "image://http://www.damndigital.com/wp-content/uploads/2010/12/steve-jobs.jpg",
                symbol: "circle",
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    color: "#f90", //圆点的颜色
                    label: {
                      position: "bottom",
                      textStyle: {
                        color: "#f90"
                      }
                    }
                  }
                }
              },
              {
                name: "СОВКОМБАНК2",
                category: 1,
                itemStyle: {
                  normal: {
                    color: "#090"
                  },
                  emphasis: {
                    color: "#000"
                  }
                }
              },
              {
                name: "СОВКОМБАНК3",
                category: 1,
                draggable: true
              },
              {
                name: "СОВКОМБАНК4",
                category: 0,
                draggable: true
              },
              {
                name: "СОВКОМБАНК5",
                category: 0,
                draggable: true
              },
              {
                name: "СОВКОМБАНК6",
                category: 0,
                draggable: true
              }
            ],
            links: [
              {
                source: "ПАО СОВКОМБАНК",
                target: "СОВКОМБАНК2",
                value: "朋友",
                lineStyle: {
                  normal: {
                    color: "#38f",
                    curveness: 0 // 线的弯曲度 0-1之间 越大则歪曲度更大
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#07ac72"
                    }
                  }
                }
              },
              {
                source: "ПАО СОВКОМБАНК",
                target: "СОВКОМБАНК3",
                value: "75%"
              },
              {
                source: "ПАО СОВКОМБАНК",
                target: "СОВКОМБАНК4",
                value: "家人"
              },
              {
                source: "ПАО СОВКОМБАНК",
                target: "СОВКОМБАНК5",
                value: "家人"
              },
              {
                source: "ПАО СОВКОМБАНК",
                target: "СОВКОМБАНК6",
                value: "家人"
              }
            ]
          }
        ]
        // series: [
        //   {
        //     type: "graph",
        //     layout: "none",
        //     symbolSize: 50,
        //     roam: "scale",
        //     label: {
        //       normal: {
        //         show: true
        //       }
        //     },
        //     edgeSymbol: ["circle", "arrow"],
        //     edgeSymbolSize: [4, 10],
        //     edgeLabel: {
        //       normal: {
        //         textStyle: {
        //           fontSize: 20
        //         }
        //       }
        //     },
        //     nodes: this.graph.nodes,
        //     links: this.graph.links,
        //     lineStyle: {
        //       normal: {
        //         opacity: 0.9,
        //         width: 2,
        //         curveness: 0
        //       }
        //     }
        //   }
        // ]
      };
      this.myChart.hideLoading();
      this.myChart.setOption(this.option, true);
    }
  }
};
</script>
<style scoped>
.relations {
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