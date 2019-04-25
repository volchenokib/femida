<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside class="asside">
        <el-header class="asside__header">
          <h4>Фемида</h4>
        </el-header>
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Компания">
            <formCompany/>
          </el-tab-pane>
          <el-tab-pane label="Регион" lazy>
            <formRegion/>
          </el-tab-pane>
        </el-tabs>
      </el-aside>

      <el-container>
        <el-header class="appHeader">
          <span>{{this.$store.state.headerTitle}}</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import formRegion from "./components/formRegion.vue";
import formCompany from "./components/formCompany.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    formRegion,
    formCompany
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style <style lang="scss">
html,
body {
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
  // width: 200px !important;
  &__header {
    background-color: rgb(203, 219, 247) !important;
    margin-top: -21px;
    text-align: center;
  }
}

.appHeader {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
