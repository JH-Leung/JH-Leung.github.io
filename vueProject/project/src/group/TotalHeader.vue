<template>
  <div id="totalHeader">
    <Header />
    <Nav />
  </div>
</template>
<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
export default {
  components: {
    Header,
    Nav
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
#totalHeader {
  margin-bottom: aa(8);
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>