<template>
  <div id="HaveHeader">
    <TotalHeader />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import TotalHeader from "../group/TotalHeader";
export default {
  components: {
    TotalHeader
  }
};
</script>