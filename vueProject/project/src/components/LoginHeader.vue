<template>
  <div class="login_header">
    <i @click="goback"></i>
    4399账号登录
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      window.history.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.login_header {
  height: aa(48);
  background: #2b2b2b;
  text-align: center;
  line-height: aa(48);
  color: white;
  font-size: aa(18);
  position: relative;
  i {
    position: absolute;
    width: aa(9);
    height: aa(9);
    border-left: aa(2) solid white;
    border-top: aa(2) solid white;
    left: aa(15);
    top: 50%;
    transform: translateY(-54%) rotate(-44deg);
  }
}
</style>