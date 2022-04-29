<template>
    <v-card
        class="mx-auto"
        max-width="400"
        tile
    >
      <v-list density="compact">
        <v-list-subheader>标头</v-list-subheader>
      <v-list-item  v-for="(item, i) in list"
                    :key="i"
                    :value="item">
        <v-list-item-title></v-list-item-title>
        <div class="up-div">
        <v-list-item-subtitle tag="span" v-text="item.id"></v-list-item-subtitle>
        </div>
        <v-list-item-title v-text="item.content"></v-list-item-title>
      </v-list-item>
      </v-list>
    </v-card>
</template>
<script>
export default {
  components:{
  },
  data: () => ({
      list:[{id:1, content:"test"}
          ,{id:2, content:"test"},
        {id:3, content:"test"}
      ]
  }),
}
</script>
<style scoped>
.up-div{
  margin-right: 10px
}
</style>