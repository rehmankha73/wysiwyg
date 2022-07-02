<template>
  <v-sheet
      height="400"
      class="overflow-hidden"
      style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
          align="center"
          justify="center"
      >
        <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
        >
          Profile Settings
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
        style="overflow-y: auto"
        v-model="drawer"
        absolute
        temporary
        right
        width="40%"
    >
      <div class="mx-auto">
        <v-img class="mx-auto rounded" height="150" width="150" src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        <p class="text-subtitle-1 text-center font-weight-bold mt-2 mb-0"> {{ user.name }} </p>
        <p class="font-weight-regular text-center" style="color: gray"> {{ user.position }} </p>
      </div>

      <v-divider></v-divider>

      <RForm :onSubmit="onSubmit">
        <template v-slot:main>
          <v-text-field
              v-model="user.name"
              label="Profile Name"
              placeholder="Display Name"
              outlined
              dense
          ></v-text-field>

          <v-text-field
              v-model="user.position"
              label="Position"
              placeholder="Position i.e: Web Developer"
              outlined
              dense
          ></v-text-field>

          <v-text-field
              v-model="user.email"
              label="Email"
              placeholder="Email i.e:example@email.com"
              outlined
              dense
          ></v-text-field>

          <v-text-field
              v-model="user.phone"
              label="Phone #"
              placeholder="Phone # i.e: +92311245781"
              outlined
              dense
          ></v-text-field>

          <v-textarea
              v-model="user.bio"
              outlined
              label="BIO"
          ></v-textarea>
        </template>
      </RForm>

    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import RForm from "@/components/RForm";

export default {
  name: "RProfileSection",
  components: {
    RForm
  },
  data () {
    return {
      drawer: false,
      user: {
        name: 'John Leider',
        position: 'Full Stack Web Developer',
        email: 'example@emial.com',
        phone: '+93125478944',
        bio: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
      },
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
    }
  },
  methods: {
    onSubmit() {
      this.$emit('updateProfile', this.user)
    }
  }
}
</script>

<style scoped>

</style>