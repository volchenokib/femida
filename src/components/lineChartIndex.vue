<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
    v-loading="dataLoading"
    element-loading-spinner="el-icon-loading"
  />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "250px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null
    };
  },

  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },

  computed: {
    dataLoading() {
      return this.$store.getters.getDataState;
    }
  },

  mounted() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.__resizeHandler();
      }
    },
    setOptions({ expectedData, markPoint, titleValue } = {}) {
      console.log("lineChartIndex", expectedData, markPoint);
      this.chart.setOption({
        title: {
          text: `Распределение CRI по регионам`,
          x: "center",
          align: "center",
          textStyle: {
            color: "#606266",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontWeight: "bold"
          }
        },

        grid: {
          left: 15,
          right: 35,
          bottom: 10,
          // top: 80,
          containLabel: true
        },

        xAxis: {
          type: "value",
          axisLabel: {
            formatter: function(val) {
              return val + "%";
            }
          },
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },

        yAxis: {
          type: "value",
          axisTick: {
            show: false
          }
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          backgroundColor: "rgba(50, 50, 50, 0.9)",
          color: "#ff7f50",
          padding: [15, 20],

          textStyle: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: 14,
            fontWeight: "lighter"
          },

          extraCssText: "text-align: left;"
        },

        legend: {
          data: ["CRI"],
          right: "32",
          top: "5"
        },

        series: [
          {
            name: "CRI",
            itemStyle: {
              normal: {
                // color: "#FF005A"
                // lineStyle: {
                //   color: "#d87a80",
                //   width: 2
                // }
              }
            },
            smooth: true,
            type: "line",
            data: expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
            markPoint: {
              data: [{ coord: markPoint }],
              symbol: "pin"
            }
          }
          // {
          //   name: "CRI за 2017",
          //   smooth: true,
          //   type: "line",
          //   itemStyle: {
          //     normal: {
          //       color: "#3888fa",
          //       lineStyle: {
          //         color: "#3888fa",
          //         width: 2
          //       },
          //       areaStyle: {
          //         color: "#f3f8ff"
          //       }
          //     }
          //   },
          //   data: actualData,
          //   animationDuration: 2800,
          //   animationEasing: "quadraticOut"
          // }
        ]
      });
    },
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    }
  }
};
</script>
