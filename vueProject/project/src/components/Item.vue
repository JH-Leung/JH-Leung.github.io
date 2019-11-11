<template>
  <div class="list_total">
    <router-link
      :to="{name:'details',params:{id:i.gid}}"
      tag="div"
      v-for="(i,index) in list"
      :key="index"
      class="list_item"
    >
      <div class="item_img">
        <img :src="i.imgurl" alt />
      </div>
      <h2 v-text="i.name"></h2>
      <p v-text="i.title"></p>
      <span>开始玩</span>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
import store from "../store";
export default {
  data() {
    return {
      itemdata: [],
      state: store.state
    };
  },
  created() {
    this.itemrender();
  },
  methods: {
    itemrender() {
      axios.get("http://localhost:3000/recentlyplay").then(({ data }) => {
        this.itemdata = data;
      });
    }
  },
  computed: {
    list() {
      if (this.state.searchText) {
        let _this = this;
        return this.itemdata.filter(function(item) {
          if (item.name.indexOf(_this.state.searchText) != -1) {
            return item;
          }
        });
      } else {
        return this.itemdata;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.list_item {
  height: aa(64);
  padding: 0 aa(10);
  background: white;
  position: relative;
  margin-bottom: aa(6);
  h2 {
    font-size: aa(12);
    padding-left: aa(60);
    padding-top: aa(12);
  }
  p {
    font-size: aa(10);
    padding-top: aa(5);
    padding-left: aa(60);
  }
  span {
    position: absolute;
    width: aa(56);
    height: aa(26);
    border: 1px solid #00cc7d;
    line-height: aa(26);
    text-align: center;
    font-size: aa(10);
    color: #00cc7d;
    border-radius: aa(4);
    right: aa(10);
    top: 50%;
    transform: translateY(-50%);
  }
  .item_img {
    width: aa(47);
    height: aa(47);
    background: yellow;
    margin-top: aa(8);
    float: left;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>