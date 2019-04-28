<template>
  <el-form class="custom-form" ref="form" :model="form" value-key="value" size="medium">
    <el-form-item label="Выбор региона">
      <el-select
        class="custom-form__item"
        v-model="form.region"
        no-match-text="не найдено"
        :disabled="isDisable"
        @change="getNewData"
        default-first-option
        filterable
      >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item"/>
      </el-select>
    </el-form-item>
  </el-form>
</template>


<script>
// import Chart from "@/components/Charts/Keyboard";

export default {
  name: "KeyboardChart",
  data() {
    return {
      form: {
        region: ""
      },
      options: [
        {
          value: "Option1",
          label: "Республика Адыгея (Адыгея)"
        },
        {
          value: "Option2",
          label: "Республика Алтай"
        },
        {
          value: "Option3",
          label: "Республика Башкортостан"
        },
        {
          value: "Option4",
          label: "Республика Бурятия"
        },
        {
          value: "Option5",
          label: "Республика Дагестан"
        },
        {
          value: "Option6",
          label: "Республика Ингушетия"
        },
        {
          value: "Option7",
          label: "Республика Ингушетия"
        },
        {
          value: "Option8",
          label: "Кабардино-Балкарская Республика"
        },
        {
          value: "Option9",
          label: "Город Москва"
        },
        {
          value: "Option10",
          label: "Ханты-Мансийский автономный округ – Югра"
        }
      ]
    };
  },

  created() {
    // set default value
    this.form.region = this.options[0];
    this.$store.dispatch("getDashboardData", this.form.region);
  },

  computed: {
    isDisable() {
      return this.$store.getters.getInputState;
    }
  },

  methods: {
    getNewData(region) {
      console.log(region);
      this.form.region = region;
      this.$store.dispatch("getDashboardData", this.form.region);
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
