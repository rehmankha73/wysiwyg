<template>
  <v-container>
    <h1>Reusable Components!</h1>

    <v-card class="pa-10">

<!--      <RProfileSection-->
<!--          @updateProfile="updateProfile"-->
<!--      />-->


<!--      <RFormTagInput-->
<!--          @selectItems="getSelectedItem"-->
<!--      />-->
<!--      <RImageCarousel />-->

<!--      <RLoginForm-->
<!--          forgotPasswordLink="/"-->
<!--          :onSubmit="() => {}"-->
<!--          @onSuccess="success()"-->
<!--      />-->

<!--      {{ name }}-->
<!--      <RTextInput-->
<!--          class="my-2"-->
<!--          v-model="name"-->
<!--          label="Name"-->
<!--      />-->

      {{ fruit }}
      <RSelectInput
          class="my-2"
          v-model="fruit"
          :options="options ? options : []"
      />

    </v-card>
  </v-container>
</template>

<script>
// import RTextInput from "@/components/RTextInput";
import RSelectInput from "@/components/RSelectInput";
// import RLoginForm from "@/components/RLoginForm";
// import RImageCarousel from "@/components/RImageCarousel";
// import RFormTagInput from "@/components/RFormTagInput";
// import RProfileSection from "@/components/RProfileSection";

export default {
  name: "ReusableComponents",
  components: {
    // RTextInput,
    RSelectInput,
    // RLoginForm,
    // RImageCarousel,
    // RFormTagInput,
    // RProfileSection
  },
  data() {
    return {
      name: '',
      fruit: '',
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
      console.log('onSuccess from RLoginForm component')
    },
    getSelectedItem(items) {
      console.log(items, 'get Selected Items from RFormTagInput component')
    },
    updateProfile(user) {
      console.log(user,'user from RProfile component')
    }
  }
}
</script>

<style scoped>

</style>