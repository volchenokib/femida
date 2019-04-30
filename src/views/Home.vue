<template>
  <div class="home">
    <panelGroup/>
    <lineChart
      :chartData="lineChartData"
      :style="{height: '350px', width:'95%'}"
      :title="'Динамика CRI для данного заказчика'"
    />
    <topContractsTable/>
    <criComposition :title="'Составляющие CRI'" :chartData="criCompositionData"/>
  </div>
</template>

<script>
import panelGroup from "@/components/panelGroup.vue";
import lineChart from "@/components/lineChart";
import topContractsTable from "@/components/topContractsTable";
import criComposition from "@/components/criComposition";

export default {
  name: "home",
  components: {
    panelGroup,
    lineChart,
    topContractsTable,
    criComposition
  },

  computed: {
    lineChartData() {
      return this.$store.getters.lineChartData;
    },
    criCompositionData() {
      // console.log("computed", this.$store.getters.topContractsData);
      return this.$store.getters.criCompositionData;
    }
  }
};
</script>
