<template>
  <v-card>
    <v-row>

      <v-col cols="12">
        <v-col cols="12">
          <div style="text-align: left;margin-left: 10px;background-color: darkgrey">
            <p>ceshi</p>
            <p>ceshi</p>
          </div>
        </v-col>
        <v-tabs height="10px"
            v-model="tab"
            color="deep-purple-accent-4"
            right
        >
          <v-tab :value="1">tag1</v-tab>
          <v-tab :value="2">tag2</v-tab>
          <v-tab :value="3">tag3</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
              v-for="n in 3"
              :key="n"
          >
            <v-container fluid>
              <commonForm/>
            </v-container>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import commonForm from "@/components/commonForm"

export default {
  components: {
    commonForm
  },
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
}
</script>

<style scoped>

</style>