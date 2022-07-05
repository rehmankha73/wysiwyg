<template>
  <div>
    <v-autocomplete
        v-model="task"
        :items="items"
        dense
        label="PLease select from the following!"
        solo
    >
      <template #selection="{ item }">
        <v-icon class="mr-2"> {{ item.icon }}</v-icon>
        {{ item.text }}
      </template>

      <template #item="{ item }">
        <span>
        <v-icon class="mr-2"> {{ item.icon }}</v-icon>
        {{ item.text }}
        </span>
      </template>

      <template #no-data>
        <div class="px-4">
          <span class=""> No data items found, add it now! </span>
          <v-btn
              icon
              color="primary"
              dark
              @click="dialog = true"
          ><v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>

    </v-autocomplete>

    <v-dialog
        v-model="dialog"
        max-width="50%"
        persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Item</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="item.text"
                    label="Text"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="item.value"
                    label="Value"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="item.icon"
                    label="Icon"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="addToItems"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "RDropDown",
  data: () => ({
    search: '',
    dialog: false,
    items: [
      {text: 'Create', value: 'create', icon: 'mdi-account'},
      {text: 'Edit', value: 'edit', icon: 'mdi-cog'},
      {text: 'Update', value: 'update', icon: 'mdi-update'}
    ],
    item: {
      text: '',
      value: '',
      icon: '',
    },
    task: '',
  }),
  methods: {
    searchItems(e) {
      console.log(e)
      const items_values = this.items.map(i => i.value)
      console.log(items_values)
      this.items = this.items.filter(item => {
        console.log(this.search)
        if(items_values.includes(item.value) && items_values.includes(this.search.toLowerCase())) {
          console.log('yes')
          return true
        }
        return false
      })

    },
    addToItems() {
      if (!this.item.text || !this.item.value || !this.item.icon) {
        console.log('Please fill all field to proceed!')
        return;
      }
      console.log(this.item, 'item')
      this.items.push({...this.item})
      this.task = this.item
      this.item = {}
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>