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
      default: "chart-bar"
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
      console.log("actualData:", actualData);
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
          },
          top: 15
        },

        grid: {
          left: "24",
          right: "30",
          bottom: "15",
          top: "150",
          containLabel: true
        },

        yAxis: {
          show: false,
          type: "category",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 45,
            show: false,
            splitNumber: 15
          },

          data: [""]
        },

        xAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            show: true
          },
          axisTick: {
            show: true
          },
          splitArea: {
            show: false
          },
          textStyle: {
            fontFamily: "",
            fontSize: 12
          },
          axisLabel: {
            formatter: function(val) {
              return val + "%";
            }
          }
        },

        legend: {
          data: [
            "Изменена стоимость контракта после заключения",
            "Период подачи заявок 15 дней",
            "На конкурс подана 1 заявка"
          ],
          left: "20",
          top: "60",
          orient: "vertical"
        },

        series: [
          {
            name: "Изменена стоимость контракта после заключения",
            data: actualData[0],
            type: "bar",
            stack: "CRI",
            barMaxWidth: 40,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                label: {
                  show: true,
                  textStyle: {
                    color: "white"
                  },
                  position: "insideTop",
                  formatter: function(bar) {
                    return bar.value + "%";
                  }
                }
              }
            },

            label: {
              normal: {
                fontSize: 11,
                position: "inside",
                show: true
              }
            },

            animationEasing: "cubicInOut",
            animationDuration: 2600
          },
          {
            name: "Период подачи заявок 15 дней",
            data: actualData[1],
            type: "bar",
            stack: "CRI",
            barMaxWidth: 40,
            barGap: "10%",
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                // color: "rgba(60,169,196,0.5)",
                label: {
                  show: true,
                  textStyle: {
                    color: "white"
                  },
                  position: "insideTop",
                  formatter: function(bar) {
                    return bar.value + "%";
                  }
                }
              }
            },

            label: {
              normal: {
                fontSize: 11,
                position: "inside",
                show: true
              }
            },

            animationEasing: "cubicInOut",
            animationDuration: 2600
          },
          {
            name: "На конкурс подана 1 заявка",
            data: actualData[2],
            type: "bar",
            stack: "CRI",
            barMaxWidth: 40,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: "#ffb980"
              }
            },

            label: {
              normal: {
                fontSize: 11,
                position: "inside",
                formatter: function(bar) {
                  return bar.value + "%";
                },
                show: true
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
