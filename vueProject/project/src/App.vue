<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import "./assets/css/base.css";
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
@function aa($px) {
  @return ($px / 320) * 100vw;
}
</style>
