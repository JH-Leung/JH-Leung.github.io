<template>
  <div class="login">
    <LoginHeader />
    <UserPass />
    <LoginBtn/>
  </div>
</template>
<script>
import LoginHeader from "../components/LoginHeader";
import UserPass from "../components/UserPass";
import LoginBtn from "../components/LoginBtn";
export default {
  components: {
    LoginHeader,
    UserPass,
    LoginBtn
  }
};
</script>
<style lang="scss" scoped>
.login {
  background: #eeeeee;
  height: 100vh;
}
</style>