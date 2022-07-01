<template>
  <v-container>
    <h1>Reusable Components!</h1>

    <v-card class="pa-10">
      <RLoginForm
          forgotPasswordLink="/"
          :onSubmit="() => {}"
          @onSuccess="success()"
      />

<!--      <RTextInput-->
<!--          class="my-2"-->
<!--          v-model="name"-->
<!--          label="Name"-->
<!--      />-->

<!--      <RSelectInput-->
<!--          class="my-2"-->
<!--          :options="options ? options : []"-->
<!--      />-->

    </v-card>
  </v-container>
</template>

<script>
// import RTextInput from "@/components/RTextInput";
// import RSelectInput from "@/components/RSelectInput";
import RLoginForm from "@/components/RLoginForm";

export default {
  name: "ReusableComponents",
  components: {
    // RTextInput,
    // RSelectInput,
    RLoginForm,
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
  },
  methods: {
    success() {
      console.log('Form Submitted successfully!')
    }
  }
}
</script>

<style scoped>

</style>