<template>
  <div class="region">
    <panelGroup/>
    <div class="region__charts-layout">
      <div class="region__pieCharts mr">
        <pieChart
          :chartData="customerAmountData"
          :title="'Распределение суммы конкурсов по заказчикам'"
          :style="{height: '350px'}"
        />
        <br>
        <pieChart
          :class="'chart'"
          :chartData="vendorAmountData"
          :title="'Распределение суммы конкурсов по поставщикам'"
          :style="{height: '350px'}"
        />
      </div>

      <div class="region__pieCharts">
        <lineChart
          :chartData="lineChartData"
          :style="{height: '350px'}"
          :title="'Динамика CRI по ТО за 2017 год'"
        />
        <br>
        <lineChartIndex :chartData="lineChartIndexData" :style="{height: '350px'}"/>
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
      console.log("COMP lineChartData", this.$store.getters.lineChartData);
      return this.$store.getters.lineChartData;
    },
    lineChartIndexData() {
      return this.$store.getters.lineChartIndexData;
    },
    customerAmountData() {
      // console.log("comp", this.$store.getters.customerAmountData);
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
  margin: 0 20px 0 10px;
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
  // padding: 15px;
}

.mr {
  margin-right: 28px;
}
</style>
