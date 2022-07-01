<template>
  <div>
    <select class="select-style">
      <option v-for="(option, key) in options" :key="key" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "RSelectInput",
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.select-style{
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>