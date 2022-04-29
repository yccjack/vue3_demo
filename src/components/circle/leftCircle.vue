<template>
  <v-row autocapitalize="sentences">
    <v-col cols="12">
      <upCircle/>
    </v-col>
    <v-col cols="12">
      <circleType/>
    </v-col>
  </v-row>

</template>

<script>
import circleType from "@/components/circle/circleType"
import upCircle from "@/components/circle/upCircle"

export default {
  components: {
    circleType,
    upCircle

  },
  name: "leftCircle"
}
</script>

<style scoped>

</style>