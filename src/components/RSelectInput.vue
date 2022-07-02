<template>
  <div>
    <label :for="label" v-if="label">{{ label }}</label>
    <select :id="label" class="select-style" :value="value" @change="$emit('value', $event.target.value)">
      <option value="">Select from the following</option>
      <option v-for="(option, key) in options" :key="key" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "RSelectInput",
  model: {
    prop: ['value'],
    event: ['value']
  },
  props: {
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
      required: true
    }
  },
   watch: {
    value(value) {
      console.log(value, 'value')
    }
   }
}
</script>

<style scoped>
.select-style{
  width: 100%;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>