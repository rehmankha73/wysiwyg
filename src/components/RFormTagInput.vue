<template>
  <section class="container-setting pa-4">
    <h5>Multiple Tags Selector</h5>
    <v-text-field
        id="parent"
        v-model="items"
        hide-details
        label="Tags"
        placeholder="You can select multiple tags."
        solo
    >
      <template v-slot:append>
        <v-btn
            id="test"
            v-if="items.length > 0"
            color="primary"
            icon
            @click="addInArray"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <template v-slot:prepend-inner>
        <div v-if="items_array.length > 0" class="d-flex flex-row flex-wrap">
          <v-chip
              v-for="(item, key) in items_array"
              :key="key"
              class="ma-2"
              close
              color="primary"
              text-color="white"
              @click:close="removeItem(key)"
          >
            {{ item }}
          </v-chip>
        </div>
      </template>
    </v-text-field>

    <v-combobox
        v-model="items_array"
        class="mt-4"
        label="Tags"
        placeholder="You can select multiple tags"
        multiple
        solo
        append-icon=""
        dense
        :deletable-chips="true"
        :small-chips="true"
    ></v-combobox>
  </section>

<!--  <section class="border container-setting pa-4">-->
<!--    <v-text-field-->
<!--        v-model="items"-->
<!--        hide-details-->
<!--        label="Tags"-->
<!--        placeholder="You can select multiple tags."-->
<!--        solo-->
<!--    >-->
<!--      <template v-slot:append>-->
<!--        <v-btn-->
<!--            v-if="items.length > 0"-->
<!--            color="primary"-->
<!--            icon-->
<!--            @click="addInArray"-->
<!--        >-->
<!--          <v-icon>mdi-plus</v-icon>-->
<!--        </v-btn>-->
<!--      </template>-->
<!--    </v-text-field>-->
<!--    <div v-if="items_array.length > 0" class="d-flex flex-row flex-wrap">-->
<!--      <v-chip-->
<!--          v-for="(item, key) in items_array"-->
<!--          :key="key"-->
<!--          class="ma-2"-->
<!--          close-->
<!--          color="primary"-->
<!--          text-color="white"-->
<!--          @click:close="removeItem(key)"-->
<!--      >-->
<!--        {{ item }}-->
<!--      </v-chip>-->
<!--    </div>-->
<!--  </section>-->
</template>

<script>
export default {
  name: "RFormTagInput",
  data() {
    return {
      items: '',
      items_array: [],
    }
  },
  mounted() {
    const field = document.getElementsByClassName('v-input__slot')[0];
    field.style.display = 'flex';
    field.style.flexWrap = 'wrap';
  },
  watch: {
    items_array(value) {
      this.$emit('selectItems', value)
    }
  },
  methods: {
    addInArray() {
      this.items_array.push(this.items)
      this.items = ''
    },
    removeItem(key) {
      this.items_array.splice(key, 1)
    }
  }
}
</script>

<style scoped>
.container-setting {
  width: 50%;
  margin: 0px auto;
  padding: 0px
}
</style>