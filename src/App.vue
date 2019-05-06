<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside class="asside">
        <el-header class="asside__header">
          <h1 class="h1">Фемида</h1>
        </el-header>
        <el-tabs class="tabs" @tab-click="handleClick">
          <el-tab-pane label="Компания">
            <!-- <span class="tabs__title">Анализ по компании</span> -->
            <formCompany/>
          </el-tab-pane>
          <el-tab-pane label="Регион" lazy>
            <!-- <span class="tabs__title">Анализ по территориальному признаку</span> -->
            <formRegion/>
          </el-tab-pane>
          <el-tab-pane label="Связи" lazy>
            <!-- <span class="tabs__title">Отслеживание связей между поставщиками</span> -->
          </el-tab-pane>
        </el-tabs>
        <footer class="footer">
          <span>Copyright © Econophysica 2019. All Rights Reserved</span>
        </footer>
      </el-aside>

      <el-container>
        <!-- <el-header class="appHeader">
          <span class="h2">{{this.$store.state.headerTitle}}</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>-->

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
      }
      if (tab.label == "Регион") {
        this.$router.replace("region");
        this.$store.state.headerTitle = "Анализ по территориальному признаку";
      }
      if (tab.label == "Связи") {
        this.$router.replace("relations");
        this.$store.state.headerTitle =
          "Отслеживание связей между поставщиками";
      }
    }
  }
};
</script>

<style <style lang="scss">
@import "./variables.scss";
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  color: $regularText;
}

// typo
.h1 {
  color: #5ab1ef;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.9px;
  text-transform: uppercase;
}

.h2 {
  font-size: 16px;
  font-weight: bold;
}
a {
  color: #2c3e50;
}

// hover element UI
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-table__body tr:hover > td {
  background-color: $main-background !important;
}

.el-select-dropdown__item {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
}

.el-select-dropdown__item.selected {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
}

.asside {
  background-color: $asside-background;
  box-shadow: $asside-shadow;
  padding: 0 10px;
  margin-right: 10px;
  width: 380px !important;
  &__header {
    background-color: $header-background;
    margin: -12px 0 28px 0;
    text-align: center;
  }
}

.footer {
  bottom: 10px;
  font-size: 12px;
  position: absolute;
  left: 50px;
}

.tabs {
  &__title {
    color: $regularText;
  }
}

.page-wrapper {
  background-color: $main-background;
}

.appHeader {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
