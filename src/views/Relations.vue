<template>
  <div class="relations">
    <panelRelations/>
    <div class="graph" id="charts" ref="chart" style="hight:100%;"></div>
  </div>
</template>




<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";
import panelRelations from "@/components/panelRelations.vue";
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
      this.myChart = echarts.init(document.getElementById("charts"));
    },
    renderChart() {
      this.myChart.showLoading();
      this.formatOption();
    },
    formatOption() {
      this.option = {
        // title: {
        //   text: "Graph"
        // },
        legend: {
          x: "center",
          // y: "bottom",
          bottom: 20,
          selectedMode: false,
          data: ["% общих заказчиков", "% в уставном капитале"]
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "graph",
            type: "graph",
            layout: "force",
            symbol: "circle",
            symbolSize: 100,
            roam: false, //drag
            edgeSymbol: ["arrow", "arrow"],
            edgeSymbolSize: [10, 0],
            focusNodeAdjacency: true, // blur
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 14
                },
                formatter: "{c}"
              }
            },

            categories: [
              {
                name: "% общих заказчиков",
                itemStyle: {
                  normal: {
                    color: "#d87a80"
                  }
                }
              },
              {
                name: "% в уставном капитале",
                itemStyle: {
                  normal: {
                    color: "#9a7fd1"
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
                show: true,
                color: "#606266"
              }
            },
            // size
            force: {
              repulsion: 16000
            },

            data: [
              // main
              {
                name: "ПАО СОВКОМБАНК",
                // symbol:
                //   "image://http://www.damndigital.com/wp-content/uploads/2010/12/steve-jobs.jpg",
                symbol: "circle",
                symbolSize: 150,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5",
                    label: {
                      position: "bottom",
                      textStyle: {
                        // color: "#f90"
                      }
                    }
                  }
                }
              },
              {
                name: "АО АКРА",
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5"
                  }
                  // emphasis: {
                  //   color: "#000"
                  // }
                }
              },
              {
                name: "ООО Инвестиционное агентство",
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5"
                  }
                }
              },
              {
                name: "ООО Сбондс.ру",
                category: 0,
                draggable: true,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5"
                  }
                }
              },
              {
                name: "ООО БАНК СКИБ",
                category: 0,
                draggable: true,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5"
                  }
                }
              },
              {
                name: "ООО БТЕ",
                category: 0,
                draggable: true,
                itemStyle: {
                  normal: {
                    color: "#f1f4f5"
                  }
                }
              }
            ],

            links: [
              // #1
              {
                source: "ПАО СОВКОМБАНК",
                target: "АО АКРА",
                name: "% общих заказчиков",
                value: "86%",

                lineStyle: {
                  normal: {
                    color: "#d87a80",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#d87a80"
                    },
                    formatter: "{c}"
                  }
                },

                symbol: ["arrow", "arrow"],
                symbolSize: [10, 10]
              },

              {
                source: "АО АКРА",
                target: "ПАО СОВКОМБАНК",
                value: "15%",
                lineStyle: {
                  normal: {
                    color: "#9a7fd1",
                    curveness: 0.2
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#9a7fd1"
                    }
                  }
                }
              },

              // #2
              {
                source: "ПАО СОВКОМБАНК",
                target: "ООО Инвестиционное агентство",
                value: "75%",
                lineStyle: {
                  normal: {
                    color: "#d87a80",
                    curveness: 0.2
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#d87a80"
                    },
                    formatter: "{c}"
                  }
                },

                symbol: ["arrow", "arrow"],
                symbolSize: [10, 10]
              },

              {
                source: "ООО Инвестиционное агентство",
                target: "ПАО СОВКОМБАНК",
                value: "25%",
                lineStyle: {
                  normal: {
                    color: "#9a7fd1",
                    curveness: 0.2
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#9a7fd1"
                    },
                    formatter: "{c}"
                  }
                }
              },

              // #3
              {
                source: "ПАО СОВКОМБАНК",
                target: "ООО Сбондс.ру",
                value: "17%",

                lineStyle: {
                  normal: {
                    color: "#d87a80",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#d87a80"
                    },
                    formatter: "{c}"
                  }
                },

                symbol: ["arrow", "arrow"],
                symbolSize: [10, 10]
              },

              {
                source: "ООО Сбондс.ру",
                target: "ПАО СОВКОМБАНК",
                value: "5%",

                lineStyle: {
                  normal: {
                    color: "#9a7fd1",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#9a7fd1"
                    },
                    formatter: "{c}"
                  }
                }
              },

              // #4
              {
                source: "ПАО СОВКОМБАНК",
                target: "ООО БАНК СКИБ",
                value: "15%",
                lineStyle: {
                  normal: {
                    color: "#d87a80",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#d87a80"
                    },
                    formatter: "{c}"
                  }
                },

                symbol: ["arrow", "arrow"],
                symbolSize: [10, 10]
              },

              {
                source: "ООО БАНК СКИБ",
                target: "ПАО СОВКОМБАНК",
                value: "38%",
                lineStyle: {
                  normal: {
                    color: "#9a7fd1",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#9a7fd1"
                    },
                    formatter: "{c}"
                  }
                }
              },

              // #5
              {
                source: "ПАО СОВКОМБАНК",
                target: "ООО БТЕ",
                value: "28%",
                lineStyle: {
                  normal: {
                    color: "#d87a80",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#d87a80"
                    },
                    formatter: "{c}"
                  }
                },

                symbol: ["arrow", "arrow"],
                symbolSize: [10, 10]
              },

              {
                source: "ООО БТЕ",
                target: "ПАО СОВКОМБАНК",
                value: "28%",
                lineStyle: {
                  normal: {
                    color: "#9a7fd1",
                    curveness: 0.2
                  }
                },

                label: {
                  normal: {
                    textStyle: {
                      color: "#9a7fd1"
                    },
                    formatter: "{c}"
                  }
                }
              }
            ]
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