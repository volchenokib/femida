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
    formatter: {
      type: String,
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
    setOptions({ actualData }) {
      this.chart.setOption({
        title: {
          text: this.title,
          left: "center",
          textStyle: {
            color: "#606266",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontSize: 16,
            fontWeight: "bold"
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
            name: "легенда",
            type: "pie",
            roseType: "radius",
            radius: [20, 120],
            center: ["50%", "50%"],
            data: actualData,

            label: {
              normal: {
                formatter: this.formatter,

                rich: {
                  d: {
                    align: "center",
                    fontSize: 14
                  },
                  c: {
                    align: "center",
                    fontSize: 12
                  }
                }
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
