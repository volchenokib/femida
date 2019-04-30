<template>
  <el-row :gutter="40" class="panel-group">
    <!-- contracts -->
    <el-col
      :xs="12"
      :sm="12"
      :lg="12"
      class="card-panel-col"
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
    >
      <div class="card-panel">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelData.contracts"
            :duration="2600"
            :separator="' '"
            class="card-panel-num"
          />
          <div class="card-panel-text">контрактов</div>
        </div>
      </div>
    </el-col>

    <!-- money -->
    <el-col
      :xs="12"
      :sm="12"
      :lg="12"
      class="card-panel-col"
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
    >
      <div class="card-panel">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelData.money"
            :decimal="','"
            :decimals="2"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">млрд. руб.</div>
        </div>
      </div>
    </el-col>

    <!-- customers -->
    <el-col
      :xs="12"
      :sm="12"
      :lg="12"
      class="card-panel-col"
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
    >
      <div class="card-panel">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelData.customers"
            :separator="' '"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">уникальных заказчиков</div>
        </div>
      </div>
    </el-col>

    <!-- CRI -->
    <el-col
      :xs="12"
      :sm="12"
      :lg="12"
      class="card-panel-col"
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
    >
      <div class="card-panel">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :prefix="'CRI '"
            :start-val="0"
            :end-val="this.panelData.cri"
            :suffix="'%'"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">в среднем</div>
        </div>
      </div>
    </el-col>

    <!-- risk -->
    <el-col
      :xs="12"
      :sm="12"
      :lg="12"
      class="card-panel-col"
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
    >
      <div class="card-panel chart">
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
          <div class="card-panel-text risk-text">{{riskLevel}} уровень риска</div>
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
.panel-group {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .card-panel-col {
    margin-bottom: 20px;
  }
  .card-panel {
    height: 90px;
    background-color: #fff;
    // background-color: #f6f9fe;
    // background-color: #eeeeee;
    border-color: rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: #666;
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
