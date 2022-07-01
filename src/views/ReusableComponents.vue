<template>
  <v-container>
    <h1>Reusable Components!</h1>
    {{ name }}
    <v-card class="pa-10">
      <RTextInput
          class="my-2"
          v-model="name"
          label="Name"
      />


      <RSelectInput
          class="my-2"
          :options="options ? options : []"
      />


    </v-card>
  </v-container>
</template>

<script>
import RTextInput from "@/components/RTextInput";
import RSelectInput from "@/components/RSelectInput";

export default {
  name: "ReusableComponents",
  components: {
    RTextInput,
    RSelectInput,
  },
  data() {
    return {
      name: '',
      options: [
        {value: 'apple', text: 'Apple'},
        {value: 'pine-apple', text: 'Pine Apple'},
        {value: 'mango', text: 'Mango'},
        {value: 'orange', text: 'Orange'},
        {value: 'grapes', text: 'Grapes'},
        {value: 'bananas', text: 'Bananas'},
        {value: 'peaches', text: 'Peaches'},
      ]
    }
  }
}
</script>

<style scoped>

</style>