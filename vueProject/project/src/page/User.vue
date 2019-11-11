<template>
  <div id="user_page">
    <UserHeader />
    <UserList />
  </div>
</template>
<script>
import UserHeader from "../components/UserHeader";
import UserList from '../components/UserList'
export default {
  components: {
    UserHeader,
    UserList
  }
};
</script>
<style lang="scss" scoped>
#user_page{
  background: #f5f5f5;
  height: 100vh;
}
</style>