<template>
  <div>
    <v-row>
      <v-col cols="12">
        <userCard />
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <category />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import category from "./category.vue";
import userCard from "./userCard.vue";
export default {
  name: "ArchivePage",
  components: {
    category,
    userCard,
  },
};
</script>

<style scoped>
</style>