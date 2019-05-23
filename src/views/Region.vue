<template>
  <div class="region">
    <panelGroup/>

    <div class="region__charts-layout">
      <div class="region__container-left">
        <pieChart
          :chartData="customerAmountData"
          :title="'Распределение суммы конкурсов по заказчикам'"
          :height="'400px'"
          :width="'100%'"
        />

        <br>

        <lineChart
          :chartData="lineChartData"
          :title="'Динамика CRI по ТО за 2017 год'"
          :height="'300px'"
          :width="'100%'"
        />
      </div>

      <div class="region__container-right">
        <pieChart
          :class="'chart'"
          :chartData="vendorAmountData"
          :title="'Распределение суммы конкурсов по поставщикам'"
          :height="'400px'"
          :width="'95%'"
        />

        <br>

        <lineChartIndex :chartData="lineChartIndexData" :height="'300px'" :width="'95%'"/>
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

  created() {
    this.$store.state.regionform.region = "Алтайский край";
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
  margin: 0 20px 0 10px;
  position: relative;
  &__charts-layout {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  &__container-left {
    margin-right: 5px;
    position: relative;
    width: 50%;
  }

  &__container-right {
    position: relative;
    width: 46%;
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
  padding: 15px;
}
</style>
