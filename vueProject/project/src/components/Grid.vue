<template>
  <div class="grid">
    <ul>
      <li>
        <i></i>
        <span>网游</span>
      </li>
      <li>
        <i></i>
        <span>女生</span>
      </li>
      <li>
        <i></i>
        <span>闯关</span>
      </li>
      <li>
        <i></i>
        <span>火柴人</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function aa($px) {
  @return ($px / 320) * 100vw;
}
.grid {
  width: 100%;
  height: aa(62);
  border-bottom: aa(6) solid #f5f5f5;
  background: #fff;
  ul {
    height: 100%;
    display: flex;
    li {
      flex: 1;
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: aa(12);
      i {
        width: aa(34);
        height: aa(34);
        background: yellow;
        margin-bottom: aa(3)
      }
    }
    li:nth-child(1) i {
      background: url(../assets/img/icon.png) no-repeat 0px aa(-60);
      background-size: 100% auto;
    }
    li:nth-child(2) i {
      background: url(../assets/img/icon.png) no-repeat 0px aa(-121);
      background-size: 100% auto;
    }
    li:nth-child(3) i {
      background: url(../assets/img/sort-cg.png) no-repeat 0px 0;
      background-size: 100% auto;
    }
    li:nth-child(4) i {
      background: url(../assets/img/sort-hcr.png) no-repeat 0px 0;
      background-size: 100% auto;
    }
  }
}
</style>