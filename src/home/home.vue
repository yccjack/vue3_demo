<template>
  <carousel/>
  <v-row>
    <v-col cols="8">

      <leftList/>
    </v-col>
    <v-col cols="4">
      <archive/>
    </v-col>
  </v-row>
</template>

<script>
import carousel from '../components/carousel.vue'
import leftList from '../pages/leftList.vue'
import archive from '../pages/archive.vue'

export default {
  name: "homePage",
  components: {
    carousel,
    leftList,
    archive
  }
}
</script>

<style scoped>

</style>