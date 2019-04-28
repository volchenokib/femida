<template>
  <div :class="className" :style="{height:height,width:width}"/>
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
    initChart() {
      (this.chart = echarts.init(this.$el, "macarons")),
        this.chart.setOption({
          title: {
            text: "Распределение сумммы по заказчикам",
            left: "center",
            // top: 20,
            textStyle: {
              //   color: "#ccc"
            }
          },

          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          legend: {
            left: "center",
            bottom: "10",
            data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"]
          },

          calculable: true,

          series: [
            {
              name: "",
              type: "pie",
              roseType: "radius",
              radius: [15, 95],
              center: ["50%", "50%"],
              data: [
                { value: 60, name: "ДРУГИЕ" },
                { value: 240, name: "ДЕПАРТАМЕНТ ФИНАНСОВ ТОМСКОЙ ОБЛАСТИ" },
                {
                  value: 149,
                  name:
                    "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
                },
                { value: 100, name: "УМП 'СПЕЦАВТОХОЗЯЙСТВО Г.ТОМСКА'" },
                { value: 59, name: "ПАО 'СОВКОМБАНК'" }
              ],

              label: {
                width: 50
              },
              animationEasing: "cubicInOut",
              animationDuration: 2600
            }
          ]
        });
    }
  }
};
</script>
