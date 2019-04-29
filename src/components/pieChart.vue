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
import { defaultCoreCipherList } from "constants";

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
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
      default: "300px"
    },
    title: {
      type: String,
      default: "Chart Title"
    }
  },

  data() {
    return {
      chart: null
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
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },

  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },

  methods: {
    setOptions({ actualData } = {}) {
      this.chart.setOption({
        title: {
          text: this.title,
          left: "center",
          // top: 20,
          textStyle: {
            //   color: "#ccc"
          }
        },

        calculable: true,

        tooltip: {
          backgroundColor: "rgba(50, 50, 50, 0.9)",
          color: "#ff7f50",
          padding: [15, 20],
          trigger: "item",

          textStyle: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: 14,
            fontWeight: "lighter"
          },

          extraCssText: "text-align: left;",

          formatter: function(actualData) {
            let percent = Math.round(actualData.percent);
            let cri = actualData.data.cri;
            let contracts = actualData.data.contracts;
            let sum = actualData.data.sum;
            let sumUnit = actualData.data.sumUnit;
            // console.log("formatter", actualData);
            return `доля: ${percent}% </br> CRI: ${cri}% в среднем </br> контрактов: ${contracts} </br> сумма: ${sum} ${sumUnit}`;
          }
        },

        legend: {
          left: "center",
          bottom: "10",
          data: actualData,
          formatter: function(item) {
            return (item = "");
          }
        },

        series: [
          {
            name: "",
            type: "pie",
            roseType: "radius",
            radius: [15, 95],
            center: ["50%", "50%"],
            data: actualData,

            label: {
              normal: {
                formatter: function(b) {
                  if (b.name.length > 30) {
                    var find = " ";
                    var re = new RegExp(find, "g");
                    var str = b.name.replace(re, "\n");
                    return str;
                  }
                },
                fontSize: 11,
                rich: {
                  b: {
                    // align: "center",
                    // verticalAlign: "middle"
                  }
                }
              }
            },

            animationEasing: "cubicInOut",
            animationDuration: 2600
          }
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
