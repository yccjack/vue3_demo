<template>
  <!-- App.vue -->
  <v-row>
    <v-col cols="2" >
    <circleType/>
    </v-col>
    <v-col cols="7">
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
import circleType from '../components/circle/circleType.vue'

export default {
  name: "circleHome",
  components: {
    user,
    circlePolymerization,
    circleType
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