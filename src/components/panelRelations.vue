<template>
  <el-row class="panel-group">
    <!-- affiliation level -->
    <el-col class="card-panel-col">
      <div
        class="card-panel chart"
        v-loading="dataLoading"
        element-loading-spinner="el-icon-loading"
      >
        <simplePie v-if="!dataLoading"/>
        <div
          class="card-panel-description"
          v-if="!dataLoading"
          element-loading-spinner="el-icon-loading"
        >
          <count-to
            :start-val="0"
            :end-val="this.panelData.risk"
            :decimal="','"
            :decimals="1"
            :duration="2600"
            class="card-panel-num"
            :style="{color:riskColor}"
          />
          <div class="card-panel-text risk-text">уровень аффилированности: {{riskLevel}}</div>
        </div>
        <!-- <div v-else>Загрузка</div> -->
      </div>
    </el-col>
  </el-row>
</template>


<script>
import CountTo from "vue-count-to";
import simplePie from "@/components/simplePie";
export default {
  name: "panelGroup",
  components: {
    simplePie,
    CountTo
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    dataLoading() {
      return this.$store.getters.getDataState;
    },
    panelData() {
      return this.$store.getters.panelData;
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
    },
    riskLevel() {
      if (this.$store.getters.panelData.risk <= 0.4) {
        return "низкий";
      } else if (
        this.$store.getters.panelData.risk >= 0.4 &&
        this.$store.getters.panelData.risk <= 0.6
      ) {
        return "средний";
      } else {
        return "высокий";
      }
    }
  }
};
</script>


<style scoped lang="scss">
@import "../variables.scss";

.panel-group {
  //   display: flex;
  //   justify-content: space-between;
  // padding: 0 20px;
  position: absolute;
  //   top: 20px;
  left: 10px;

  .card-panel-col {
    // margin-bottom: 20px;
    width: 280px;
  }
  .card-panel {
    align-items: center;
    background-color: #fff;
    border: $border;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    display: flex;
    height: 120px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .card-panel-num {
    font-size: 16px;
    font-weight: bold;
  }
  .card-panel-text {
    font-size: 14px;
    margin-top: 5px;
  }

  .chart {
    justify-content: space-between;
    padding: 0 10px;
  }

  .risk {
    color: #2ec7c9;
    font-size: 16px;
    font-weight: bold;

    &-text {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
