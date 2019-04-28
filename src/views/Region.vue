<template>
  <div class="region">
    <panelGroup/>
    <div class="region__charts-layout">
      <div class="region__pieCharts">
        <pieChart
          :title="'Распределение сумммы по заказчикам'"
          :style="{height: '350px', width:'95%'}"
        />
        <br>
        <pieChart
          :title="'Распределение сумммы по поставщикам'"
          :style="{height: '350px', width:'95%'}"
        />
      </div>

      <div class="region__pieCharts">
        <lineChart :chartData="lineChartData" :style="{height: '350px', width:'95%'}"/>
        <br>
        <lineChartIndex :chartData="lineChartIndexData" :style="{height: '350px', width:'95%'}"/>
      </div>
    </div>
  </div>
</template>


<script>
import panelGroup from "@/components/panelGroup";
import lineChart from "@/components/lineChart";
import lineChartIndex from "@/components/lineChartIndex";
import pieChart from "@/components/pieChart";
export default {
  name: "region",
  components: {
    panelGroup,
    lineChart,
    lineChartIndex,
    pieChart
  },
  data() {
    return {};
  },
  computed: {
    lineChartData() {
      return this.$store.getters.lineChartData;
    },
    lineChartIndexData() {
      console.log("computed", this.$store.getters.lineChartIndexData);
      return this.$store.getters.lineChartIndexData;
    }
  }
};
</script>


<style lang="scss" scoped>
.region {
  &__charts-layout {
    display: flex;
    // justify-content: space-between;
  }
  &__pieCharts {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    // justify-content: center;
    width: 100%;
  }
}
.chart {
  background-color: #fff;
  margin: 0 auto;
  padding: 15px 0;
}
</style>
