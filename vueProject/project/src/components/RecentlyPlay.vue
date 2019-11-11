<template>
  <div class="recentlyPlay">
    <h2>
      最近在玩
      <i @click="clickisok" :class="isok? '':'ative'  "></i>
    </h2>
    <ul v-show="isok">
      <li v-for="(i,index) in grid" :key="index">
        <img :src="i.imgurl" alt />
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      grid: [],
      isok: true
    };
  },
  created() {
    this.lodarender();
  },
  methods: {
    lodarender() {
      axios.get("http://localhost:3000/recentlyplay").then(({ data }) => {
        this.grid = data;
      });
    },
    clickisok() {
      this.isok = !this.isok;
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.recentlyPlay {
  background: #fff;
  padding-bottom: aa(6);
  margin-bottom: aa(6);
  h2 {
    height: aa(25);
    font-size: aa(12);
    line-height: aa(25);
    padding-left: aa(10);
    padding-right: aa(10);
    i {
      float: right;
      width: aa(10);
      height: aa(10);
      background: url(../assets/img/updown.png) no-repeat 0 0;
      background-size: 100% auto;
      margin-top: aa(6);
    }
    .ative {
      background: url(../assets/img/updown.png) no-repeat 0 bottom;
      background-size: 100% auto;
    }
  }
  ul {
    display: flex;
    box-sizing: border-box;
    width: 97%;
    padding-left: aa(10);
    padding-right: aa(10);
    overflow: auto;
    li {
      width: aa(47);
      height: aa(47);
      margin-right: aa(10);
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>