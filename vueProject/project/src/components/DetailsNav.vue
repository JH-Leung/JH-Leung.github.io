<template>
  <div class="details_nav">
    <ul>
      <router-link
        :to="{
          name:i.goto.name,
          params:{name:'+'+i.goto.name+'+'}
          }"
        tag="li"
        @click.native="ativeClick(index)"
        :class="index==atives?'ative':''"
        v-for="(i,index) in lis"
        :key="index"
        v-text="i.font"
      ></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lis: [
        {
          font: "详情",
          goto: {
            name: "One"
          }
        },
        {
          font: "礼包",
          goto: {
            name: "Two"
          }
        },
        {
          font: "评论",
          goto: {
            name: "Three"
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
.details_nav {
  height: aa(36);
  border-bottom: aa(2) solid #f5f5f5;
  ul {
    display: flex;
    height: 100%;
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
      width: aa(30);
      height: aa(1);
      background: #3d94ee;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>