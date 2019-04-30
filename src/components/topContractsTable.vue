<template>
  <div>
    <span class="chartTitle">Топ контрактов с max CRI</span>

    <el-table
      v-loading="dataLoading"
      element-loading-spinner="el-icon-loading"
      :data="topContractsData"
    >
      <el-table-column label="Номер контракта">
        <template scope="scope">
          <a
            :href="`//www.zakupki.gov.ru/epz/order/notice/ea44/view/common-info.html?regNumber=${scope.row.contract}`"
            target="_blank"
          >{{scope.row.contract}}</a>
        </template>
      </el-table-column>

      <el-table-column label="CRI">
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
    topContractsData() {
      return this.$store.getters.topContractsData;
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
