<template>
    <v-form light outlined style="border-collapse: collapse"
            ref="form"
            v-model="valid"
            lazy-validation
    >
      <v-text-field color="#FFFFFF" dense height="10px" light
                    label="标题"
                    outlined
                    :rules="rules"
                    hide-details="auto"
      ></v-text-field>
      <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
      ></v-textarea>
    </v-form>

</template>

<script>
export default {
  name: "form"
}
</script>

<style scoped>

</style>