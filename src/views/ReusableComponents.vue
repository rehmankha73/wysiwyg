<template>
  <v-container>
    <h1>Reusable Components!</h1>
<!--    <v-card class="pa-10">-->
<!--      <v-radio-group v-model="selected_component">-->
<!--        <v-radio-->
<!--            v-for="(component, key) in components"-->
<!--            :key="key"-->
<!--            :label="component.text"-->
<!--            :value="component.value"-->
<!--        ></v-radio>-->
<!--      </v-radio-group>-->
<!--    </v-card>-->

    <v-card class="pa-10 my-4">
      <p class="text-subtitle-1" v-for="(component, key) in components" :key="key"> <b>{{ component.value === selected_component ? component.text : '' }}</b> </p>

      <RLoginForm
          v-if="selected_component === 'login'"
          forgotPasswordLink="/"
          :onSubmit="() => {}"
          @onSuccess="success()"
      />

      <RImageCarousel
          v-if="selected_component === 'image'"
      />

      <RFormTagInput
          v-if="selected_component === 'tags'"
          @selectItems="getSelectedItem"
      />

      <RProfileSection
          v-if="selected_component === 'profile'"
          @updateProfile="updateProfile"
      />

      <RSelectInput
          v-if="selected_component === 'select'"
          class="my-2"
          v-model="fruit"
          label="Name of Favorite Fruit"
          :options="options ? options : []"
      />
      <span v-if="selected_component === 'select'"><b>Output:</b> {{ fruit }}</span>

      <RTextInput
          v-if="selected_component === 'input'"
          class="my-2"
          v-model="name"
          label="UserName/Email"
          placeholder="Please enter username/email"
      />
      <span v-if="selected_component === 'input'"><b>Output:</b> {{ name }}</span>

      <RNavbarProfileMenu
          v-if="selected_component === 'navbar_popup'"
          :options="nav_links"
          @onLogout="logout"
      />

    </v-card>
  </v-container>
</template>

<script>
import RTextInput from "@/components/RTextInput";
import RSelectInput from "@/components/RSelectInput";
import RLoginForm from "@/components/RLoginForm";
import RImageCarousel from "@/components/RImageCarousel";
import RFormTagInput from "@/components/RFormTagInput";
import RProfileSection from "@/components/RProfileSection";
import RNavbarProfileMenu from "@/components/RNavbarProfileMenu";

export default {
  name: "ReusableComponents",
  components: {
    RTextInput,
    RSelectInput,
    RLoginForm,
    RImageCarousel,
    RFormTagInput,
    RProfileSection,
    RNavbarProfileMenu
  },
  data() {
    return {
      show_nav_bar_profile_card: false,
      selected_component: '',
      components: [
          {value: 'login', text: 'RLoginForm'},
          {value: 'image', text: 'RImageCarousel'},
          {value: 'tags', text: 'RFormTagInput'},
          {value: 'profile', text: 'RProfileSection'},
          {value: 'select', text: 'RSelectInput'},
          {value: 'input', text: 'RTextInput'},
          {value: 'navbar_popup', text: 'RNavbarProfileMenu'},
      ],
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
      ],
      nav_links: [
        {
          to: '/',
          title: 'Dashboard',
          icon: 'mdi-view-dashboard-variant',
        },
        {
          to: '#',
          title: 'My Profile',
          icon: 'mdi-account',
        },
        {
          to: '#',
          title: 'Settings',
          icon: 'mdi-cog',
        },
      ],
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
    },
    logout() {
      console.log('logout from RNavbarProfileMenu component')
    }
  }
}
</script>

<style scoped>

</style>