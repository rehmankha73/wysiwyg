<template>
  <v-menu
      absolute
      offset-y
      style="max-width: 600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-avatar v-bind="attrs" v-on="on">
        <img :src="user ? user.image : `https://randomuser.me/api/portraits/men/78.jpg`" class="mx-auto rounded"
             height="150"
             width="150"/>
      </v-avatar>
    </template>

    <v-card class="border pa-10">
      <div class="mx-auto">
        <v-avatar class="mx-auto d-block" size="148">
          <img :src="user ? user.image : `https://randomuser.me/api/portraits/men/78.jpg`" class="mx-auto rounded"
               height="150"
               width="150"/>
        </v-avatar>
        <p class="text-subtitle-1 text-center font-weight-bold mt-2 mb-0">{{
            user ? user.name : 'Rehman Ahmed Khan'
          }} </p>
        <p class="font-weight-regular text-center" style="color: gray">{{
            user ? user.email : 'rehmankha73@gmail.com'
          }} </p>
      </div>
      <v-divider/>

      <v-list-item
          v-for="(link, key) in options"
          :key="key"
          :to="link.to"
          class="my-1"
          dense
          exact
      >
        <v-list-item-icon>
          <v-icon v-text="link.icon"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.title"/>
        </v-list-item-content>
      </v-list-item>

      <v-btn block color="primary mt-5" type="button" @click="$emit('onLogout')">
        <v-icon class="mr-2">mdi-arrow-left</v-icon>
        Logout
      </v-btn>
    </v-card>

  </v-menu>
</template>

<script>
export default {
  name: "RNavbarProfileMenu",
  data() {
    return {}
  },

  props: {
    user: {
      type: Object,
      default: null,
    },
    options: {
      type: Array,
      default: () => {
      },
    }
  }
}
</script>

<style scoped>
</style>