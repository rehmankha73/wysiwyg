<template>
  <v-card
      class="mx-auto"
      width="300"
  >
    <v-list
        v-for="(link, key) in link_list"
        :key="key"
    >
      <!--For showing groupListsItems-->
      <v-list-group
          v-if="link.group_items && link.group_items.length > 0"
          :prepend-icon="link.icon"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="(item, i) in link.group_items"
            :key="i"
            :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <!--For showing listItems Only not in group-->
      <v-list-item
          v-else
          :to="link.to"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "RList",
  props: {
    link_list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>