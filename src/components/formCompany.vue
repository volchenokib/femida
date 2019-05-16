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
        :value="companySelectVlue"
        @change="getNewData"
        @focus="clearDefaultValue"
        filterable
        remote
        reserve-keyword
      >
        <el-option
          v-for="item in this.$store.state.options"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-select>
      <!-- 
      <br>
      <br>-->

      <!-- ---------------------------------------------------------------------------------- -->
      <!-- <div class="autocomplete-container">
        <el-autocomplete
          class="custom-form__item"
          v-model="form.company"
          :fetch-suggestions="querySearch"
          placeholder="Название компании"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </div>-->

      <!-- ---------------------------------------------------------------------------------- -->
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
      links: [],
      state2: "vuex",

      form: {
        company: "",
        type: "customer",
        region: ""
      },
      region: [],
      value: [],
      companySelectVlue: ""
    };
  },

  created() {
    // set default value
    this.form.company =
      'УНИТАРНОЕ МУНИЦИПАЛЬНОЕ ПРЕДПРИЯТИЕ "СПЕЦАВТОХОЗЯЙСТВО Г. ТОМСКА"';
    this.form.region = " ";

    this.$store.dispatch("getCompanyData", this.form);

    // this.list = this.companies.map(item => {
    //   return { value: item, label: item };
    // });
  },

  mounted() {
    this.links = this.loadAll();
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

    clearDefaultValue() {
      // this.form.company = " ";
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
    },

    // ----------------------------------------------------------------------------------------

    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "AO 'Р-Фарм'", link: "https://github.com/vuejs/vue" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
          link: "https://github.com/ElemeFE/element"
        },
        {
          value: "ООО 'Инвестиционное агенство'",
          link: "https://github.com/ElemeFE/cooking"
        },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    },

    handleSelect(item) {}
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

// .custom-popper {
//   color: coral;
// }
// .el-scrollbar__view .el-select-dropdown__list {
//   color: coral !important;
// }

// .custom-popper {
//   background-color: coral;
// }

.autocomplete-container {
  min-width: 340px;
}
</style>
