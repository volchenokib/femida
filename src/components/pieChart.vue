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
          textStyle: {
            color: "#606266",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontWeight: "bold"
          }
        },

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
            let cri = actualData.data.cri;
            let contracts = actualData.data.contracts;
            let sum = actualData.data.sum;
            let sumUnit = actualData.data.sumUnit;
            return `CRI: ${cri ||
              "- "}% в среднем </br> контрактов: ${contracts} </br> сумма: ${sum} ${sumUnit}`;
          }
        },

        legend: {
          data: actualData,
          type: "scroll",
          bottom: "10",
          left: "center",
          pageIconColor: "#606266"
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
                fontSize: 11,
                formatter: ["{d|{d}%}"].join("\n"),

                rich: {
                  d: {
                    align: "center",
                    fontSize: 14
                  }
                }

                // function(b) {
                //   function replacer(str, offset, s) {
                //     if (offset >= 25) {
                //       return "\n";
                //     } else {
                //       return " ";
                //     }
                //   }
                //   return b.name.replace(/\s/g, replacer);

                // if (b.name.length > 30) {
                // var find = " ";
                // var re = new RegExp(/\s/, "g");
                // var str = b.name.replace(re, "\n");
                // var str = b.name.replace(/\s/g, "\n");
                // return str;

                //}
                // }
              }
            },

            animationEasing: "cubicInOut",
            animationDuration: 2600
          }
        ],

        calculable: true
      });
    },

    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    }
  }
};
</script>
