<template>
  <div class="user_pass">
    <div class="username">
      <span>账号</span>
      <input type="text" name id="username" v-model="username" />
    </div>
    <div class="password">
      <span>密码</span>
      <input type="password" name id="password" v-model="password" />
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  watch: {
    username(newValue) {
      store.setusername(newValue);
      window.console.log(newValue);
    },
    password(newValue) {
      store.setpassword(newValue);
      window.console.log(newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.user_pass {
  height: aa(110);
  width: aa(300);
  margin: auto;
  background: white;
  margin-top: aa(10);
  border: aa(1) solid #e0e0e0;
  display: flex;
  flex-direction: column;
  border-radius: aa(5);
  .username {
    flex: 1;
    border-bottom: aa(1) solid #e0e0e0;
    span {
      display: inline-block;
      width: aa(70);
      height: 100%;
      text-align: center;
      line-height: aa(55);
      font-size: aa(13);
      color: #666;
    }
  }
  .password {
    flex: 1;
    span {
      display: inline-block;
      width: aa(70);
      height: 100%;
      text-align: center;
      line-height: aa(55);
      font-size: aa(13);
      color: #666;
    }
  }
}
</style>