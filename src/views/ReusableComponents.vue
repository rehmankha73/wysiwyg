<template>
  <div>
    <section class="pa-6 text-h5" style="background-color: white">Components</section>

    <v-container>
      <h1>Reusable Components!</h1>
      <!--          <v-card class="pa-10">-->
      <!--            <v-radio-group v-model="selected_component">-->
      <!--              <v-radio-->
      <!--                  v-for="(component, key) in components"-->
      <!--                  :key="key"-->
      <!--                  :label="component.text"-->
      <!--                  :value="component.value"-->
      <!--              ></v-radio>-->
      <!--            </v-radio-group>-->
      <!--          </v-card>-->

      <v-card class="pa-10 my-4">
        <p v-for="(component, key) in components" :key="key" class="text-subtitle-1">
          <b>{{ component.value === selected_component ? component.text : '' }}</b></p>

        <RLoginForm
            v-if="selected_component === 'login'"
            :onSubmit="() => {}"
            forgotPasswordLink="/"
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
            v-model="fruit"
            :options="options ? options : []"
            class="my-2"
            label="Name of Favorite Fruit"
        />
        <span v-if="selected_component === 'select'"><b>Output:</b> {{ fruit }}</span>

        <RTextInput
            v-if="selected_component === 'input'"
            v-model="name"
            class="my-2"
            label="UserName/Email"
            placeholder="Please enter username/email"
        />
        <span v-if="selected_component === 'input'"><b>Output:</b> {{ name }}</span>

        <RNavbarProfileMenu
            v-if="selected_component === 'navbar_popup'"
            :options="nav_links"
            @onLogout="logout"
        />

        <RList
            v-if="selected_component === 'link_list'"
            :link_list="link_list"
        />

        <RDropDown
            v-if="selected_component === 'drop_down'"
        />

        <RPagination v-if="false"/>

        <DataTable
            :loader="loadData"
            :headers="headers"
            title="Users"
            :allow-add="false"
            @done="$router.back()"
            :default_pagination="false"
            @searchData="searchData"
            :showSearch="false"
        >
<!--          <template #primary-action>-->
<!--            <v-text-field-->
<!--                v-model="search"-->
<!--                solo-->
<!--                label="Search anything..."-->
<!--                dense-->
<!--                hide-details-->
<!--                @click:append="reloadData"-->
<!--                @change="reloadData"-->
<!--            />-->
<!--          </template>-->
        </DataTable>


      </v-card>
    </v-container>
  </div>
</template>

<script>
import RTextInput from "@/components/RTextInput";
import RSelectInput from "@/components/RSelectInput";
import RLoginForm from "@/components/RLoginForm";
import RImageCarousel from "@/components/RImageCarousel";
import RFormTagInput from "@/components/RFormTagInput";
import RProfileSection from "@/components/RProfileSection";
import RNavbarProfileMenu from "@/components/RNavbarProfileMenu";
import RList from "@/components/RList";
import RDropDown from "@/components/RDropDown";
import RPagination from "@/components/RPagination";
import DataTable from "@/components/DataTable";
import {products} from "@/api/data";

export default {
  name: "ReusableComponents",
  components: {
    DataTable,
    RPagination,
    RDropDown,
    RList,
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
      search: null,
      searchResult: [],
      headers: [
        {
          text: 'Id',
          value: 'id',
          sortable: true,
          width: 150
        },
        {
          text: 'Item',
          value: 'title',
          sortable: true,
          width: 200
        },
      ],
      loading: false,
      attrs: {
        class: 'mb-6',
        boilerplate: false,
        elevation: 2,
      },
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
        {value: 'link_list', text: 'RList'},
        {value: 'drop_down', text: 'RDropDown'},
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
      link_list: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard-variant', to: '/'},
        {title: 'Dashboard', icon: 'mdi-view-dashboard-variant', to: '/'},
        {
          title: 'Users', icon: 'mdi-account-circle', group_items: [
            {to: '/', title: 'Create', icon: 'mdi-plus-outline'},
            {to: '/', title: 'Read', icon: 'mdi-read'},
            {to: '/', title: 'Update', icon: 'mdi-update'},
            {to: '/', title: 'Delete', icon: 'mdi-delete'},
          ]
        },
        {
          title: 'Admin', icon: 'mdi-cog', group_items: [
            {to: '/', title: 'Admins', icon: 'mdi-plus-outline'},
            {to: '/', title: 'Users', icon: 'mdi-read'},
          ]
        },
        {title: 'Dashboard', icon: 'mdi-cog', to: '/'},
      ],
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 5000)

    this.reloadData();
  },
  methods: {
    reloadData() {
      document.getElementById('refresh').click()
    },
    searchData(query) {
      console.log(query, 'test')
      console.log(products.data.filter(product => product.title.match(query)))
      this.searchResult = products.data.filter(product => product.title.match(query))
      console.log(this.searchResult)
    },
    success() {
      console.log('onSuccess from RLoginForm component')
    },
    getSelectedItem(items) {
      console.log(items, 'get Selected Items from RFormTagInput component')
    },
    updateProfile(user) {
      console.log(user, 'user from RProfile component')
    },
    logout() {
      console.log('logout from RNavbarProfileMenu component')
    },
    loadData() {
      if (this.searchResult && this.searchResult.length > 0) {
        console.log('from load')
        return {
          page: products.page,
          data: this.searchResult
        }
      }
      return products;

    }
  }
}
</script>

<style scoped>

</style>