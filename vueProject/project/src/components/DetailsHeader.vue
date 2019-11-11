<template>
  <div class="details_header">
    <span v-text="name"></span>
    <router-link tag="i" :to="{
      name:'recommend'
    }"></router-link>
  </div>
</template>
<script>
export default {
  props: ["name"],
  methods: {
    // goback() {
    //   window.location.href = "http://localhost:8080/HaveHeader/recommend";
    // }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.details_header {
  height: aa(41);
  background: #3d94ee;
  line-height: aa(41);
  text-align: center;
  color: white;
  position: relative;
  font-size: aa(14);
  i {
    position: absolute;
    left: aa(14);
    top: aa(15);
    width: aa(8);
    height: aa(8);
    border-left: aa(2) solid #fff;
    border-top: aa(2) solid #fff;
    transform: rotateZ(-44deg);
  }
}
</style>