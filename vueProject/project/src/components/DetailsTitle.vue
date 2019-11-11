<template>
  <div class="details_title">
    <div class="item_top">
      <div class="details_img">
        <img :src="imgurl" alt />
      </div>
      <h2 v-text="name"></h2>
      <h3>人气 : 14万+</h3>
      <p v-text="title"></p>
    </div>
    <button id="playBtn">开始游戏</button>
  </div>
</template>
<script>
export default {
  props: ["title", "imgurl", "name"]
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.details_title {
  position: relative;
  height: aa(142);
  box-sizing: border-box;
  padding: aa(14.5) aa(21);
  border-top: aa(6) solid #f5f5f5;
  border-bottom: aa(6) solid #f5f5f5;
  .item_top {
    height: aa(53);
    h2 {
      float: left;
      width: aa(150);
      padding-left: aa(14);
      font-size: aa(14)
    }
    h3 {
      float: left;
      width: aa(150);
      padding-left: aa(14);
      padding-top: aa(3);
      font-size: aa(10);
      color: #959595;
    }
    p {
      float: left;
      width: aa(150);
      padding-left: aa(14);
      padding-top: aa(3);
      font-size: aa(10);
      color: #959595;
    }
    .details_img {
      width: aa(53);
      height: aa(52.5);
      overflow: hidden;
      border-radius: aa(10);
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  #playBtn {
    width: aa(230);
    height: aa(34);
    background: #00cc7d;
    text-align: center;
    line-height: aa(36);
    font-size: aa(15);
    color: white;
    border-radius: aa(5);
    position: absolute;
    bottom: aa(14);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>