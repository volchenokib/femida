<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside class="asside">
        <el-header class="asside__header">
          <h1 class="h1">Фемида</h1>
        </el-header>
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Компания">
            <formCompany/>
          </el-tab-pane>
          <el-tab-pane label="Регион" lazy>
            <formRegion/>
          </el-tab-pane>
          <el-tab-pane label="Связи" lazy></el-tab-pane>
        </el-tabs>
      </el-aside>

      <el-container>
        <el-header class="appHeader">
          <span class="h2">{{this.$store.state.headerTitle}}</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main class="page-wrapper">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import formRegion from "./components/formRegion.vue";
import formCompany from "./components/formCompany.vue";

export default {
  name: "app",
  components: {
    formRegion,
    formCompany
  },
  data() {
    return {};
  },
  created() {
    this.$router.replace("/");
  },

  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      if (tab.label == "Компания") {
        this.$router.replace("/");
        this.$store.state.headerTitle = "Анализ по компании";
      } else if (tab.label == "Регион") {
        this.$router.replace("region");
        this.$store.state.headerTitle = "Анализ по территориальному признаку";
      } else if (tab.label == "Связи") {
        this.$router.replace("relation");
        this.$store.state.headerTitle =
          "Отслеживание связей между поставщиками";
      }
    }
  }
};
</script>

<style <style lang="scss">
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}

// typo
.h1 {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.h2 {
  color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.asside {
  background-color: rgb(203, 219, 247);
  width: 360px !important;
  &__header {
    background-color: rgb(203, 219, 247) !important;
    margin-top: -21px;
    text-align: center;
  }
}

.page-wrapper {
  background-color: #f3f7ff;
}

.appHeader {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
