<template>
  <el-form class="custom-form" ref="form" :model="form" label-position="top">
    <!-- <el-form-item label="Компания">
      <el-autocomplete
        class="custom-form__item"
        popper-class="popper"
        v-model="form.company"
        :fetch-suggestions="querySearchAsync"
        @select="handleSelect"
      ></el-autocomplete>
    </el-form-item>-->

    <el-form-item label="Компания">
      <el-select
        class="custom-form__item"
        v-model="form.company"
        no-match-text="не найдено"
        default-first-option
        filterable
      >
        <el-option v-for="item in companies" :key="item.value" :label="item.label" :value="item"/>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-radio-group v-model="form.resource">
        <el-radio label="По заказчику"/>
        <el-radio label="По поставщику"/>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Выбор региона">
      <el-select
        class="custom-form__item"
        v-model="form.region"
        no-match-text="не найдено"
        default-first-option
        filterable
      >
        <el-option v-for="item in regions" :key="item.value" :label="item.label" :value="item"/>
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
        resource: "По заказчику",
        region: ""
      },
      companies: [
        {
          value: "Option11",
          label: "AO 'Р-Фарм'"
        },
        {
          value: "Option21",
          label:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        {
          value: "Option31",
          label: "ООО 'Инвестиционное агенство'"
        },
        {
          value: "Option41",
          label: "ПОА 'Совкомбанк'"
        },
        {
          value: "Option51",
          label: "OOO 'БТЕ'"
        },
        {
          value: "Option1110",
          label: "AO 'Р-Фарм'"
        },
        {
          value: "Option211",
          label:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        {
          value: "Option311",
          label: "ООО 'Инвестиционное агенство'"
        },
        {
          value: "Option411",
          label: "ПОА 'Совкомбанк'"
        },
        {
          value: "Option511",
          label: "OOO 'БТЕ'"
        },
        {
          value: "Option111",
          label: "AO 'Р-Фарм'"
        },
        {
          value: "Option2111",
          label:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        {
          value: "Option3111",
          label: "ООО 'Инвестиционное агенство'"
        },
        {
          value: "Option4111",
          label: "ПОА 'Совкомбанк'"
        },
        {
          value: "Option5111",
          label: "OOO 'БТЕ'"
        }
      ],
      regions: [
        {
          value: "Option101",
          label: "все регионы"
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
      ]
    };
  },

  mounted() {
    this.links = this.loadAll();
    this.form.region = this.regions[0];
    this.form.company = this.companies[0].label;
    this.$store.state.headerTitle = this.form.company;
  },

  methods: {
    loadAll() {
      return [
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" },
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" },
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" },
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" },
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" },
        { value: "AO 'Р-Фарм'" },
        {
          value:
            "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'"
        },
        { value: "ООО 'Инвестиционное агенство'" },
        { value: "ПОА 'Совкомбанк'" },
        { value: "OOO 'БТЕ'" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
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
</style>
