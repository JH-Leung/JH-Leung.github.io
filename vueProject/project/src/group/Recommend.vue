<template>
  <div id="recommend">
    <Banner />
    <Grid />
    <RecentlyPlay />
    <Item />
  </div>
</template>
<script>
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import RecentlyPlay from "../components/RecentlyPlay";
import Item from "../components/Item";
export default {
  components: {
    Banner,
    Grid,
    RecentlyPlay,
    Item
  }
};
</script>
<style lang="scss" scoped>
#recommend {
  background: #f5f5f5;
}
</style>