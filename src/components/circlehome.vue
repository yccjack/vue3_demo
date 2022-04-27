<template>
  <!-- App.vue -->

  <v-app>
    <navigate/>
    <v-main class="centered">
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import navigate from './navigate.vue'

export default {
  name: "circleHome",
  components: {
    navigate
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