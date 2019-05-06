<template>
  <div class="table chart" v-loading="dataLoading" element-loading-spinner="el-icon-loading">
    <div class="table__title">Топ контрактов с max CRI</div>

    <el-table :data="topContractsData" :header-row-style="{ color : '#606266'}">
      <el-table-column class="table__custom-header" label="Номер контракта" align="center">
        <template scope="scope">
          <a
            :href="`//www.zakupki.gov.ru/epz/order/notice/ea44/view/common-info.html?regNumber=${scope.row.contract}`"
            target="_blank"
          >{{scope.row.contract}}</a>
        </template>
      </el-table-column>

      <el-table-column class="table__custom-header" label="CRI" align="center">
        <template scope="scope">
          <span>{{scope.row.cri}}%</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "topContractsTable",
  //   props: {
  //     tableData: {
  //       required: true
  //     }
  //   },
  data() {
    return {};
  },
  computed: {
    dataLoading() {
      return this.$store.getters.getDataState;
    },
    topContractsData() {
      return this.$store.getters.topContractsData;
    }
  }
};
</script>


<style lang="scss" scoped>
.table {
  min-height: 213px;
  &__title {
    background-color: #fff;
    color: "#606266";
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
