<template>
  <div class="login_btn">
    <button @click="login" id="login_btn" v-text="atives==0? '登录':'注册'">登录</button>
    <h2>
      <span
        @click="ative(index)"
        :class=" atives==index&&atives !=1 ?'ative':''  "
        v-for="(i,index) in title "
        :key="index"
        v-text="i"
      ></span>
    </h2>
  </div>
</template>
<script>
import axios from "axios";
import store from "../store";
export default {
  data() {
    return {
      state: store.state,
      title: ["账号登录", "|", "快速注册"],
      atives: 0
    };
  },
  methods: {
    ative(index) {
      this.atives = index;
    },
    login() {
      if (this.atives == 0) {
        axios
          .get("http://localhost:3000/checklogin", {
            params: {
              username: this.state.username1,
              password: this.state.password1
            }
          })
          .then(({ data }) => {
            if (data.length > 0) {
              window.alert("登陆成功!");
              window.location.href = "http://localhost:8080/";
            } else {
              window.alert("账号或者密码错误,请核对!");
            }
          });
      } else {
        axios
          .get("http://localhost:3000/newuser", {
            params: {
              username: this.state.username1,
              password: this.state.password1
            }
          })
          .then(() => {
            window.alert("注册成功!");
            window.location.reload();
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.login_btn {
  text-align: center;
  margin-top: aa(20);
  #login_btn {
    width: aa(300);
    height: aa(40);
    text-align: center;
    line-height: aa(40);
    background: #70c700;
    color: white;
    font-size: aa(16);
    border-radius: aa(3);
  }
  h2 {
    color: #666;
    margin-top: aa(20);
    span {
      font-size: aa(14);
      padding: 0 aa(10);
    }
    .ative {
      color: #70c700;
    }
  }
}
</style>