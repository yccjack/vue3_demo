<template>
  <v-card
      class="mx-auto pa-md-1 mx-lg-auto"
      width="100%"
      :elevation="5"
  >
    <v-card-title>
      <v-list three-line :items="items">
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
      <span class="text-h6 font-weight-light">
      </span>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { $type: 'subheader', text: 'Today' },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      }
    ],
  }),
}
</script>
<style scoped>

.user-w-tj {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  height: 56px;
  background-color: #f5f6f7;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.user-w-tj p {
  font-size: 12px;
  color: #bcbcbc;
}
div {
  display: block;
}

</style>