<template>
  <!-- App.vue -->
  <v-app>
    <navigate/>
    <v-main class="centered">
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import navigate from '../components/navigate.vue'
import home from "@/home/home";

export default {
  name: "entrancePage",
  components: {
    navigate,
    home
  }
}

</script>

<style scoped>
.centered {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;

}
</style>