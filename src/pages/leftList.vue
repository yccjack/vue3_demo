<template>

  <v-card
      class="mx-auto"
  >
    <v-row dense>
    <v-list-item v-for="n in 10" :key="n">
      <v-col cols="12">
      <v-list-item-content>
        <v-list-item-title>
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <p class="text-h4 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="deep-purple accent-4" @click="toDetail(n)"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-list-item-title>
      </v-list-item-content>
      <v-divider></v-divider>
      </v-col>
    </v-list-item>

    </v-row>
  </v-card>
</template>

<script>
export default {
name: "leftList",
  data: () => ({
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  methods: {
    toDetail (e) {
      this.$router.push({
        path: `/details/${e}`,
      })
    }
  }
}
</script>

<style scoped>

</style>