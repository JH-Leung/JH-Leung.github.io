<template>
  <div class="banner"></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.banner {
  width: aa(308);
  height: aa(86);
  background: url(../assets/img/banner.gif);
  background-size: 100% 100%;
  border: aa(6) solid #f5f5f5;
  border-radius: aa(2);
}
</style>