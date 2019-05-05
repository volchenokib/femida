<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: "pie"
    },
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "100px"
    }
  },

  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },

  computed: {
    risk() {
      return this.$store.getters.panelData.risk;
    },
    riskColor() {
      if (this.$store.getters.panelData.risk <= 0.4) {
        return "#2ec7c9";
      } else if (
        this.$store.getters.panelData.risk >= 0.4 &&
        this.$store.getters.panelData.risk <= 0.6
      ) {
        return "#f5994e";
      } else {
        return "#d87a80";
      }
    }
  },

  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);

      this.chart.setOption({
        series: [
          {
            name: "уровень риска",
            type: "pie",
            // roseType: "radius",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              {
                value: this.risk,
                itemStyle: { color: this.riskColor },
                selected: true
              },
              { value: 1 - this.risk, itemStyle: { color: "#b6a2de" } }
            ],
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: this.riskColor
              }
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


<style lang="scss" scoped>
</style>
