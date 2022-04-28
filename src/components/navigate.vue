<template>
    <v-app-bar extension-height="64px"  >

      <div class="centered">
        <v-row align="center">
          <v-col cols="6">
            <v-btn text @click="toHome('0')">圈子</v-btn>
            <v-btn text @click="toHome('1')">首页</v-btn>
            <v-btn text @click="toDetail(id)">文章详情</v-btn>
            <v-btn text @click="toChat()">聊天</v-btn>
          </v-col>
          <v-col cols="4">
          </v-col>
          <v-col cols="1">
            <v-btn elevation="2" small>登录</v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn elevation="2" small>注册</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
</template>

<script>
import axios from "axios";

export default {
  name: "navigatePage",
  created() {
    this.getUserInfo()
    console.log("调用一次接口")
  },
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    id: 1,
  }),
  methods: {
    toDetail(e) {
      this.$router.push({
        path: `/details/${e}`,
      });
    },
    getUserInfo(){
    axios.get("./user.json").then((res)=>{
      console.log(res)
    })
    },
    toHome(e) {
      if ("1" === e) {
        this.$router.push({
          path: `/`,
        });
      } else {
        this.$router.push({
          path: `/circle`,
        });
      }
    },
    toChat() {
      this.$router.push({
        path: `/chat`,
      });
    },
  },
};
</script>

<style scoped>
.centered {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
v-btn {
  margin-top: 10px;
}
</style>