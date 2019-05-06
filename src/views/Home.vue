<template>
  <div class="home">
    <panelGroup/>

    <div class="company__charts-layout">
      <div class="company__container-left">
        <pieWinRate
          :class="'chart'"
          :chartData="winRateData"
          :formatter="formatterWins"
          :title="'Частота выигрыша поставщиков за год'"
          :style="{height: '480px'}"
          v-if="!this.$store.state.vendor"
        />

        <pieWinRate
          :class="'chart'"
          :chartData="regionsRateData"
          :formatter="formatterRegions"
          :title="'Распределение суммы контрактов по регионам'"
          :style="{height: '480px'}"
          v-if="this.$store.state.vendor"
        />
      </div>

      <div class="company__container-right">
        <topContractsTable/>

        <br>

        <!-- <criComposition :title="'Составляющие CRI'" :chartData="criCompositionData"/> -->

        <compositionBar
          :title="'Составляющие CRI'"
          :chartData="criCompositionData"
          :style="{height: '243px'}"
        />
      </div>
    </div>

    <br>

    <div class="company__container-full">
      <lineChart
        :title="this.$store.state.vendor ? 'Динамика CRI для данного поставщика' : 'Динамика CRI для данного заказчика'"
        :chartData="lineChartData"
        :style="{height: '220px'}"
      />
    </div>
  </div>
</template>

<script>
import panelGroup from "@/components/panelGroup.vue";
import lineChart from "@/components/lineChart";
import topContractsTable from "@/components/topContractsTable";
import criComposition from "@/components/criComposition";
import compositionBar from "@/components/compositionBar";
import pieWinRate from "@/components/pieWinRate";

export default {
  name: "home",
  components: {
    panelGroup,
    lineChart,
    topContractsTable,
    criComposition,
    compositionBar,
    pieWinRate
  },
  data() {
    return {
      formatterWins: ["{d|{d}%}", "{c|{c} контрактов}"].join("\n"),
      formatterRegions: ["{d|{d}%}"].join("\n")
    };
  },

  computed: {
    lineChartData() {
      return this.$store.getters.lineChartData;
    },
    criCompositionData() {
      return this.$store.getters.criCompositionData;
    },
    winRateData() {
      return this.$store.getters.winRateData;
    },
    regionsRateData() {
      return this.$store.getters.regionsRateData;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../variables.scss";

.home {
  margin: 0 20px;
  position: relative;
}

.company {
  &__charts-layout {
    display: flex;
    justify-content: space-between;
  }

  &__container-left {
    position: relative;
    width: 60%;
  }

  &__container-right {
    position: relative;
    width: 36%;
  }
  &__container-full {
    // padding: 0 20px;
    position: relative;
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

.chart-bar {
  background-color: #fff;
  border: $border;
  border-radius: $border-radius;
  box-shadow: box-shadow;
}
</style>
