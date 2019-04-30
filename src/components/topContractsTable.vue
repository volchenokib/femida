<template>
  <div>
    <span class="chartTitle">Топ контрактов с max CRI</span>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Номер контракта" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
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
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom"
        },
        {
          date: "2016-05-02",
          name: "Tom"
        },
        {
          date: "2016-05-04",
          name: "Tom"
        },
        {
          date: "2016-05-01",
          name: "Tom"
        }
      ]
    };
  }
  //   computed: {
  //     topContractsData() {
  //       console.log("computed", this.$store.getters.topContractsData);
  //       return this.$store.getters.topContractsData;
  //     }
  //   }
};
</script>


<style lang="scss" scoped>
</style>
