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
        :value="companySelectVlue"
        @focus="hideValue"
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
        resource: "customer",
        region: ""
      },
      region: [],
      value: [],
      regions: [
        {
          value: "Option101",
          label: "Все регионы"
        },
        {
          value: "Option10",
          label: "Республика Адыгея (Адыгея)"
        },
        {
          value: "Option20",
          label: "Республика Алтай"
        },
        {
          value: "Option30",
          label: "Республика Башкортостан"
        },
        {
          value: "Option40",
          label: "Республика Бурятия"
        },
        {
          value: "Option50",
          label: "Республика Дагестан"
        },
        {
          value: "Option60",
          label: "Республика Ингушетия"
        },
        {
          value: "Option70",
          label: "Республика Ингушетия"
        },
        {
          value: "Option80",
          label: "Кабардино-Балкарская Республика"
        },
        {
          value: "Option90",
          label: "Город Москва"
        },
        {
          value: "Option100",
          label: "Ханты-Мансийский автономный округ – Югра"
        }
      ],
      companySelectVlue: ""
    };
  },

  created() {
    // set default value
    this.form.company = this.$store.state.companies[0];
    // this.form.company = this.state2;
    this.form.region = this.regions[0];

    this.$store.dispatch("getDashboardData", this.form);

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
      this.$store.dispatch("getDashboardData", this.form);
    },
    getNewData() {
      this.$store.dispatch("getDashboardData", this.form);
    },
    hideValue() {
      // this.companySelectVlue = "dsf";
    },
    remoteMethod(query) {
      // this.$store.dispatch("getCompanyList", query);

      if (query !== "") {
        this.$store.state.searchLoading = true;
        setTimeout(() => {
          this.$store.state.searchLoading = false;
          this.$store.state.options = this.$store.state.companies.filter(
            item => {
              return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
          );
        }, 200);
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

.custom-popper {
  background-color: coral;
}

.autocomplete-container {
  min-width: 340px;
}
</style>
