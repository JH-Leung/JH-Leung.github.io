<template>
  <div id="Nav">
    <ul>
      <router-link
        :to="i.goto"
        tag="li"
        @click.native="ativeClick(index)"
        v-for="(i,index) in navlist"
        v-text="i.title"
        :key="index"
        :class="index==atives?'ative':''"
      ></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navlist: [
        {
          title: "推荐",
          goto: {
            name: "recommend"
          }
        },
        {
          title: "最新",
          goto: {
            name: "newest"
          }
        },
        {
          title: "排行",
          goto: {
            name: "ranking"
          }
        },
        {
          title: "分类",
          goto: {
            name: "classify"
          }
        },
        {
          title: "论坛",
          goto: {
            name: "forum"
          }
        }
      ],
      atives: 0
    };
  },
  methods: {
    ativeClick(index) {
      this.atives = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
#Nav {
  height: aa(36);
  background: #fff;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: aa(36);
      font-size: aa(14);
      position: relative;
    }
    .ative {
      color: #3d94ee;
    }
    .ative:after {
      content: "";
      position: absolute;
      width: aa(14);
      height: aa(3);
      background: #3d94ee;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>