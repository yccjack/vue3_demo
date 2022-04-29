<template>
  <!-- App.vue -->
  <v-row>
    <v-col cols="3" >
    <leftCircle/>
    </v-col>
    <v-col cols="6">
      <circlePolymerization/>
    </v-col>

    <v-col cols="3">
      <user/>
    </v-col>
  </v-row>
</template>

<script>
import user from '../components/user.vue'
import circlePolymerization from '../components/circle/circlePolymerization.vue'
import leftCircle from '../components/circle/leftCircle.vue'

export default {
  name: "circleHome",
  components: {
    user,
    circlePolymerization,
    leftCircle
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