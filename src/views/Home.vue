<template>
  <div class="home">
    <panelGroup/>
    <lineChart
      :chartData="lineChartData"
      :style="{height: '350px', width:'95%'}"
      :title="'Динамика CRI для данного заказчика'"
    />
    <topContractsTable/>
  </div>
</template>

<script>
import panelGroup from "@/components/panelGroup.vue";
import lineChart from "@/components/lineChart";
import topContractsTable from "@/components/topContractsTable";

export default {
  name: "home",
  components: {
    panelGroup,
    lineChart,
    topContractsTable
  },

  computed: {
    lineChartData() {
      return this.$store.getters.lineChartData;
    }
    // topContractsData() {
    //   console.log("computed", this.$store.getters.topContractsData);
    //   return this.$store.getters.topContractsData;
    // }
  }
};
</script>
