<template>
  <v-app>
    <v-app-bar
        app
        color="deep-purple accent-4"
        dark
        dense
        height="50%"
    >
      <v-app-bar-nav-icon class="pa-0" to="/">
        <img alt="logo" height="30" src="../assets/logo.png" width="30"/>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="pa-0 text-subtitle-1">Horizontal Dashboard</v-toolbar-title>

      <ul class="d-flex" style="list-style: none;">

        <router-link class="mx-2 text-white" style="text-decoration: none" to="/">
          <li>Home</li>
        </router-link>

        <router-link class="mx-2 text-white" style="text-decoration: none" to="/charts">
          <li>Charts</li>
        </router-link>

        <router-link class="mx-2 text-white" style="text-decoration: none" to="/components">
          <li>Components</li>
        </router-link>
      </ul>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <RNavbarProfileMenu position="right-top" />
    </v-app-bar>

    <!--Multiple Navigation Drawer Variant #1-->
    <!--    <v-navigation-drawer-->
    <!--        app-->
    <!--        permanent-->
    <!--    >-->
    <!--      <v-row-->
    <!--          class="fill-height"-->
    <!--          no-gutters-->
    <!--      >-->
    <!--        <v-navigation-drawer-->
    <!--            :mini-variant="!is_mini_drawer_open"-->
    <!--            :mini-variant-width="is_mini_drawer_open ? 56 : 0"-->
    <!--            dark-->
    <!--            permanent-->
    <!--        >-->
    <!--          <v-list-item class="px-2">-->
    <!--            <v-list-item-avatar>-->
    <!--              <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>-->
    <!--            </v-list-item-avatar>-->
    <!--          </v-list-item>-->

    <!--          <v-divider></v-divider>-->

    <!--          <v-list-->
    <!--              dense-->
    <!--              nav-->
    <!--          >-->
    <!--            <v-list-item-->
    <!--                v-for="(item, i) in items"-->
    <!--                :key="i"-->
    <!--                @click="selectItem(i)"-->
    <!--            >-->
    <!--              <v-list-item-action>-->
    <!--                <v-icon>{{ item.icon }}</v-icon>-->
    <!--              </v-list-item-action>-->

    <!--              <v-list-item-content>-->
    <!--                <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--              </v-list-item-content>-->
    <!--            </v-list-item>-->
    <!--          </v-list>-->
    <!--        </v-navigation-drawer>-->

    <!--        <v-list v-if="!is_mini_drawer_open" class="grow">-->

    <!--          <div class="my-2">-->
    <!--            <v-btn icon link @click="movedBack()" class="ml-2">-->
    <!--              <v-icon size="36">mdi-arrow-left-thin</v-icon>-->
    <!--            </v-btn>-->
    <!--            <span class="text-center"> {{ selected_item.title }}</span>-->
    <!--          </div>-->


    <!--          <v-list-item-->
    <!--              v-for="(link, l) in getSubLink"-->
    <!--              :key="l"-->
    <!--              :to="link.link"-->
    <!--              link-->
    <!--          >-->
    <!--            <v-list-item-title>-->
    <!--              <span>-->
    <!--                <v-icon>{{ link.icon }}</v-icon>-->
    <!--              </span>-->
    <!--              {{ link.title }}-->
    <!--            </v-list-item-title>-->
    <!--          </v-list-item>-->
    <!--        </v-list>-->
    <!--      </v-row>-->
    <!--    </v-navigation-drawer>-->

    <v-navigation-drawer
        app
        color="primary"
        permanent
        :width="is_mini_drawer_open ? 400 : 80"
    >
      <v-row
          class="fill-height"
          no-gutters
          width="40%"
      >
        <v-navigation-drawer
            dark
            mini-variant
            mini-variant-width="80"
            permanent
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
              dense
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="selectParentItem(i)"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>


          <template v-slot:append>
            <div class="d-flex flex-column justify-center align-center">
              <RNavbarProfileMenu position="left-bottom" />
              <span style="color: white">RK</span>
            </div>
          </template>
        </v-navigation-drawer>

        <v-list class="grow">
          <v-list-item
              v-for="(link, l) in getSubLink"
              :key="l"
              :to="link.link"
              link
          >
            <v-list-item-title>
              <span>
              <v-icon>{{ link.icon }}</v-icon>
              </span>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>


    </v-navigation-drawer>

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
  components: {RNavbarProfileMenu},
  computed: {
    getSubLink() {
      return this.selected_item ? this.selected_item.links : []
    }
  },
  data() {
    return {
      is_mini_drawer_open: false,
      selected_item: {},
      items: [
        {
          title: 'Home', icon: 'mdi-home', links: [
            {icon: 'mdi-home', link: '/', title: 'Home'},
            {icon: 'mdi-chart-line', link: '/charts', title: 'Charts'},
            {icon: 'mdi-chart-tree', link: '/components', title: 'Components'},
          ]
        },
        {
          title: 'About', icon: 'mdi-information', links: [
            {icon: 'mdi-book', link: '#', title: 'Our Work'},
            {icon: 'mdi-account-group', link: '#', title: 'Our Team'},
            {icon: 'mdi-account-switch', link: '#', title: 'Our Clients'}
          ]
        },
        {
          title: 'Contact', icon: 'mdi-phone', links: [
            {icon: 'mdi-phone', link: '#', title: 'Admin'},
            {icon: 'mdi-phone', link: '#', title: 'Manager'}
          ]
        },
        {
          title: 'Setting', icon: 'mdi-cog', links: [
            {icon: 'mdi-cog', link: '#', title: 'General'},
            {icon: 'mdi-earth', link: '#', title: 'Site'},
          ]
        },
      ],
    }
  },
  methods: {
    selectItem(index) {
      this.is_mini_drawer_open = !this.is_mini_drawer_open
      this.selected_item = this.items[index]
    },

    selectParentItem(index) {
      console.log(this.is_mini_drawer_open)
      if (this.is_mini_drawer_open && this.selected_item.title === this.items[index].title) {
        console.log('close mini drawer')
        this.is_mini_drawer_open = false;
        this.selected_item = null;
        return;
      }
      this.is_mini_drawer_open = true;
      this.selected_item = this.items[index]
    },
    movedBack() {
      this.is_mini_drawer_open = !this.is_mini_drawer_open
      this.selected_item = null
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  text-decoration: none;
  color: white
}
</style>