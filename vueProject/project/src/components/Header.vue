<template>
  <div id="header">
    <div class="search">
      <input type="text" name id="searchFrame" v-model="searchText" />
      <span id="searchBtn"></span>
    </div>
    <router-link to="/user" tag="div" class="userIcon"></router-link>
  </div>
</template>
<script>
import stote from "../store";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  watch: {
    searchText(newValue) {
      stote.setsearchText(newValue);
      window.console.log(newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}

#header {
  height: aa(47);
  width: 100%;
  background: url(../assets/img/logo.png) no-repeat aa(10) aa(14), #3d94ee;
  background-size: aa(100), aa(20);

  .search {
    height: aa(25);
    margin-left: aa(123);
    width: aa(150);
    float: left;
    margin-top: aa(11);

    #searchFrame {
      height: aa(25);
      width: aa(113);
      box-sizing: border-box;
      padding-left: aa(12);
      border-radius: aa(100) 0 0 aa(100);
      float: left;
    }

    #searchBtn {
      float: left;
      width: aa(36);
      height: aa(25);
      background: url(../assets/img/icon.png) no-repeat aa(3) aa(-29), #fff;
      background-size: aa(33);
      border-radius: 0 aa(100) aa(100) 0;
    }
  }

  .userIcon {
    width: aa(30);
    height: aa(30);
    float: left;
    margin-top: aa(11);
    margin-left: aa(11);
    background: url(../assets/img/icon.png);
    background-size: aa(33);
  }
}
</style>