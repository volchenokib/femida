<template>
  <el-row :gutter="40" class="panel-group">
    <!-- contracts -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelDataCompanyContracts"
            :duration="2600"
            :separator="' '"
            class="card-panel-num"
          />
          <div class="card-panel-text">контрактов</div>
        </div>
      </div>
    </el-col>

    <!-- money -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelDataCompanyMoney"
            :decimal="','"
            :decimals="1"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">{{moneyDesc}}</div>
        </div>
      </div>
    </el-col>

    <!-- customers -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col" v-if="this.$store.state.vendor">
      <div class="card-panel" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelDataCompanyCustomers"
            :separator="' '"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">{{customersDesc}}</div>
        </div>
      </div>
    </el-col>

    <!-- vendor -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col" v-if="!this.$store.state.vendor">
      <div class="card-panel" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :start-val="0"
            :end-val="this.panelDataCompanyVendors"
            :separator="' '"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">{{vendorDesc}}</div>
        </div>
      </div>
    </el-col>

    <!-- Index -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
        <div class="card-panel-description" v-if="!dataLoading">
          <count-to
            :prefix="'CRI '"
            :start-val="0"
            :end-val="this.panelDataCompanyIndex"
            :suffix="'%'"
            :duration="2600"
            class="card-panel-num"
          />
          <div class="card-panel-text">в среднем</div>
        </div>
      </div>
    </el-col>

    <!-- risk -->
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div
        class="card-panel chart"
        v-loading="dataLoading"
        element-loading-spinner="el-icon-loading"
      >
        <simpleCompanyPie v-if="!dataLoading"/>
        <div
          class="card-panel-description"
          v-if="!dataLoading"
          element-loading-spinner="el-icon-loading"
        >
          <count-to
            :start-val="0"
            :end-val="this.panelDataCompanyRisk"
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
import simpleCompanyPie from "@/components/simpleCompanyPie";

export default {
  name: "panelCompanyGroup",
  components: {
    simpleCompanyPie,
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
    panelDataCompanyContracts() {
      return this.$store.getters.panelDataCompanyContracts;
    },
    panelDataCompanyMoney() {
      return this.$store.getters.panelDataCompanyMoney;
    },
    panelDataCompanyCustomers() {
      return this.$store.getters.panelDataCompanyCustomers;
    },
    panelDataCompanyVendors() {
      return this.$store.getters.panelDataCompanyVendors;
    },
    panelDataCompanyIndex() {
      return this.$store.getters.panelDataCompanyIndex;
    },
    panelDataCompanyRisk() {
      return this.$store.getters.panelDataCompanyRisk;
    },
    customersDesc() {
      // description format for russian language
      let lastDigit = this.$store.getters.panelDataCompanyCustomers
        .toString()
        .slice(-1);

      if (lastDigit == "1") {
        return "уникальный заказчик";
      } else if (lastDigit == "2" || lastDigit == "3" || lastDigit == "4") {
        return "уникальных заказчика";
      } else {
        return "уникальных заказчиков";
      }
    },

    vendorDesc() {
      // description format for russian language
      let lastDigit = this.$store.getters.panelDataCompanyCustomers
        .toString()
        .slice(-1);

      if (lastDigit == "1") {
        return "уникальный поставщик";
      } else if (lastDigit == "2" || lastDigit == "3" || lastDigit == "4") {
        return "уникальных поставщика";
      } else {
        return "уникальных поставщиков";
      }
    },

    moneyDesc() {
      const money = Math.round(this.$store.getters.panelDataCompanyDesc);
      const len = money.toString().length;
      if (len > 9) {
        return "млрд. руб.";
      } else if (len > 6 && len <= 9) {
        return "млн. руб.";
      } else {
        return "тыс. руб";
      }
    },
    riskColor() {
      if (this.$store.getters.panelDataCompanyRisk < 0.4) {
        return "#2ec7c9";
      } else if (
        this.$store.getters.panelDataCompanyRisk >= 0.4 &&
        this.$store.getters.panelDataCompanyRisk < 0.6
      ) {
        return "#f5994e";
      } else {
        return "#d87a80";
      }
    },
    riskLevel() {
      if (this.$store.getters.panelDataCompanyRisk < 0.4) {
        return "низкий";
      } else if (
        this.$store.getters.panelDataCompanyRisk >= 0.4 &&
        this.$store.getters.panelDataCompanyRisk < 0.6
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
  display: flex;
  justify-content: space-between;
  // padding: 0 20px;
  .card-panel-col {
    margin-bottom: 20px;
  }
  .card-panel {
    align-items: center;
    background-color: #fff;
    border: $border;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    display: flex;
    height: 90px;
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
