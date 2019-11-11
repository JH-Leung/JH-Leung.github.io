<template>
  <div class="user_header">
    <h2>个人中心</h2>
    <div class="goback" @click="goback">
      <i></i>
      <span>返回</span>
    </div>
    <div class="userIcon">
      <i>
        <img src="../assets/img/img.png" alt />
      </i>
      <router-link to="/login" tag="span">请登录</router-link>
    </div>
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
.user_header {
  height: aa(138);
  background: #45b0e4;
  position: relative;
  border-bottom: aa(1) solid #dadada;
  h2 {
    font-size: aa(15);
    color: white;
    text-align: center;
    padding-top: aa(10);
  }
  .goback {
    position: absolute;
    font-size: aa(14);
    color: white;
    left: aa(10);
    top: aa(10);

    i {
      display: inline-block;
      width: aa(8);
      height: aa(8);
      border-top: aa(2) solid white;
      border-left: aa(2) solid white;
      transform: rotate(-44deg);
    }
  }
  .userIcon {
    position: absolute;
    text-align: center;
    width: aa(61);
    bottom: aa(10);
    left: 50%;
    transform: translateX(-50%);
    i {
      display: inline-block;
      width: aa(61);
      height: aa(61);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      max-width: aa(200);
      color: white;
      font-size: aa(14);
    }
  }
}
</style>