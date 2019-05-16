<template>
  <el-form class="custom-form" ref="form" :model="form">
    <el-form-item label="Выбор компании">
      <el-select
        class="custom-form__item"
        v-model="form.company"
        placeholder="Название компании"
        :remote-method="remoteMethod"
        :disabled="isDisable"
        :loading="this.$store.state.searchLoading"
        @change="getNewData"
        @focus="hideDefaultValue"
        @blur="showDefaultValue"
        default-first-option
        filterable
        remote
      >
        <el-option
          v-for="item in this.$store.state.options"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-radio-group v-model="form.type" :disabled="isDisable" @change="changeSource">
        <el-radio v-model="form.type" label="customer">По заказчику</el-radio>
        <el-radio v-model="form.type" label="contractor">По поставщику</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Выбор региона">
      <el-select
        class="custom-form__item"
        v-model="form.region"
        no-match-text="Нет данных"
        :disabled="isDisable"
        popper-class="custom-popper"
        @change="getNewData"
        default-first-option
        filterable
      >
        <el-option
          v-for="region in this.$store.state.regions"
          :key="region.index"
          :label="region.label"
          :value="region.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      form: {
        company: "",
        type: "customer",
        region: ""
      },
      tempInputValue: ""
    };
  },

  created() {
    // set default value
    this.form.company =
      'УНИТАРНОЕ МУНИЦИПАЛЬНОЕ ПРЕДПРИЯТИЕ "СПЕЦАВТОХОЗЯЙСТВО Г. ТОМСКА"';
    this.form.region = " ";

    this.$store.dispatch("getCompanyData", this.form);
  },

  computed: {
    searchLoading() {
      return this.$store.getters.searchLoading;
    },
    isDisable() {
      return this.$store.getters.getInputState;
    }
  },

  methods: {
    changeSource() {
      this.$store.state.vendor = !this.$store.state.vendor;
      this.$store.dispatch("getCompanyData", this.form);
    },

    getNewData() {
      this.$store.dispatch("getCompanyData", this.form);
    },

    hideDefaultValue() {
      // this.tempInputValue = this.form.company;
      // this.form.company = "";
      // this.$store.state.options.push(this.tempInputValue);
    },
    showDefaultValue(e) {
      // this.$store.state.options = [];
      // console.log("e", e);
      // click не на элементе дропдауна
      // if (!e.target.value) {
      //   this.form.company = this.tempInputValue;
      //   this.tempInputValue = "";
      //   this.$store.state.options = [];
      //   console.log("click не на элементе дропдауна");
      // }
    },

    remoteMethod(query) {
      if (query.length >= 5) {
        this.$store.state.searchLoading = true;

        let searchForm = {
          company: query,
          type: this.form.type,
          region: this.form.region
        };

        this.$store.dispatch("getSearchData", searchForm);

        this.$store.state.searchLoading = false;
      } else {
        this.$store.state.options = [];
      }
    }
  }
};
</script>


<style scoped <style lang="scss" scoped>
.custom-form {
  padding: 0 10px !important;
  text-align: left;
  &__item {
    width: 100%;
  }
}

.autocomplete-container {
  min-width: 340px;
}
</style>
