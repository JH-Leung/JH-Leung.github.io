<template>
  <div id="details">
    <DetailsHeader :name="gid.name" />
    <DetailsTitle :name="gid.name" :title="gid.title" :imgurl="gid.imgurl" />
    <DetailsNav />
    <router-view />
  </div>
</template>
<script>
import DetailsHeader from "../components/DetailsHeader";
import DetailsTitle from "../components/DetailsTitle";
import DetailsNav from "../components/DetailsNav";
import axios from "axios";
export default {
  data() {
    return {
      gid: {
        name: "加载中...",
        title: "加载中...",
        imgurl: "加载中..."
      },
      isok: false
    };
  },
  created() {
    this.headRender();
  },
  activated() {
    this.headRender();
    document.querySelector("li").click();
  },
  deactivated() {
    this.gid = {
      name: "加载中...",
      title: "加载中...",
      imgurl: "加载中..."
    };
  },
  components: {
    DetailsHeader,
    DetailsTitle,
    DetailsNav
  },
  methods: {
    headRender() {
      axios
        .get("http://localhost:3000/senddetails", {
          params: {
            gid: this.$route.params.id
          }
        })
        .then(({ data }) => {
          this.gid = data[0];
        });
    }
  }
};
</script>