<template>
  <div class="user_list">
    <div v-for="(i,index) in title" :key="index" class="user_item">
      <i></i>
      <span v-text="i.font">个人信息</span>
      <em></em>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: [
        {
          font: "个人信息"
        },
        {
          font: "我的游戏"
        },
        {
          font: "活动中心"
        },
        {
          font: "系统通知"
        },
        {
          font: "联系我们"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.user_list {
  margin-top: aa(10);
  border-top: aa(1) solid #dadada;
  .user_item {
    height: aa(50);
    border-bottom: aa(1) solid #dadada;
    background: white;
    line-height: aa(50);
    padding-left: aa(20);
    position: relative;

    &:nth-child(2) {
      i {
        background-position: center aa(-46);
      }
    }
    &:nth-child(3) {
      i {
        background-position: center aa(-100);
      }
    }
    &:nth-child(4) {
      i {
        background: url(../assets/img/message.png);
        background-size: 100% 100%;
      }
    }
    &:nth-child(5) {
      i {
        background-position: center aa(-150);
      }
    }
    i {
      display: inline-block;
      width: aa(20);
      height: aa(20);
      background: url(../assets/img/user.png) no-repeat;
      background-position: center aa(2);
      background-size: 100% auto;
      vertical-align: middle;
      margin-right: aa(15);
    }
    span {
      font-size: aa(12);
      color: #666666;
      vertical-align: middle;
    }
    em {
      position: absolute;
      width: aa(8);
      height: aa(8);
      border-top: aa(1) solid #666;
      border-right: aa(1) solid #666;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: aa(20);
    }
  }
}
</style>