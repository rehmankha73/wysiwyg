<template>
  <v-app>
    <v-app-bar
        app
        color="deep-purple accent-4"
        dark
        dense
        height="50%"
    >
      <v-app-bar-nav-icon to="/" class="pa-0">
        <img alt="logo" height="30" src="../assets/logo.png" width="30"/>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="pa-0 text-subtitle-1">Horizontal Dashboard</v-toolbar-title>

      <ul class="d-flex" style="list-style: none;">

        <router-link class="mx-2 text-white" to="/">
          <li>Home</li>
        </router-link>

        <router-link class="mx-2 text-white" to="/charts">
          <li>Charts</li>
        </router-link>

        <router-link class="mx-2 text-white" to="/components">
          <li>Components</li>
        </router-link>
      </ul>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <RNavbarProfileMenu/>
    </v-app-bar>

    <v-main
        app
        style="background-color: whitesmoke"
    >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import RNavbarProfileMenu from "@/components/RNavbarProfileMenu";

export default {
  name: "RHorizontalDashboardLayout",
  components: {RNavbarProfileMenu}
}
</script>

<style scoped>
ul{
  list-style: none;
}

li{
  list-style: none;
  text-decoration: none;
  color: white
}
</style>