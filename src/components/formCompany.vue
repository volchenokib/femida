<template>
  <el-form class="custom-form" ref="form" :model="form" label-position="top">
    <el-form-item label="Компания">
      <el-select
        class="custom-form__item"
        v-model="form.company"
        filterable
        remote
        reserve-keyword
        placeholder="введите название компании"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
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
      options: [],
      value: [],
      list: [],
      loading: false,
      companies: [
        "AO 'Р-Фарм'",
        "ФГБНУ 'ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК'",
        "ООО 'Инвестиционное агенство'",
        "ПОА 'Совкомбанк'",
        "OOO 'БТЕ'"
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
    // company input default value
    this.form.company = this.companies[0];

    // region input default value
    this.form.region = this.regions[0];

    this.list = this.companies.map(item => {
      return { value: item, label: item };
    });
  },

  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
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
