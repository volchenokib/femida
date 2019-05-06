<template>
  <div class="region">
    <panelGroup/>
    <div class="region__charts-layout">
      <div class="region__pieCharts">
        <pieChart
          :class="'chart'"
          :chartData="vendorAmountData"
          :title="'Распределение суммы конкурсов по заказчикам'"
          :style="{height: '350px', width:'95%'}"
        />
        <br>
        <pieChart
          :chartData="customerAmountData"
          :title="'Распределение суммы конкурсов по поставщикам'"
          :style="{height: '350px', width:'95%'}"
        />
      </div>

      <div class="region__pieCharts">
        <lineChart
          :chartData="lineChartData"
          :style="{height: '350px', width:'95%'}"
          :title="'Динамика CRI по ТО за 2017 год'"
        />
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
      return this.$store.getters.lineChartIndexData;
    },
    customerAmountData() {
      return this.$store.getters.customerAmountData;
    },
    vendorAmountData() {
      return this.$store.getters.vendorAmountData;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../variables.scss";
.region {
  &__charts-layout {
    display: flex;
  }
  &__pieCharts {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
}
.chart {
  background-color: #fff;
  border: $border;
  border-radius: $border-radius;
  box-shadow: box-shadow;
  margin: 0 auto;
  padding: 15px 0;
}
</style>
