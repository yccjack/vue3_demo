<template>
  <div>
    <!-- App.vue -->

    <v-app>
      <navigate/>
      <v-main class="centered">
        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
      <artical-page></artical-page>
        </v-container>
      </v-main>
      <v-footer app>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import navigate from "@/components/navigate";
import articalPage from "@/components/articalPage";
export default {
name: "DetailsPage",
  components: {
    navigate,
    articalPage
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