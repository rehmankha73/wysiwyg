<template>
  <div>
    <label v-if="label" :for="label">{{ label }}</label>
    <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="input-style"
        :class="classes"
        :id="label"
        :type="type"
        :placeholder="placeholder"
        v-bind="$attrs"
    />
  </div>
</template>

<script>

export default {
  name: "RTextInput",
  data() {
    return {
      modelValue: ''
    }
  },

  // model: {
  //   prop: 'value',
  //   event: 'value'
  // },

  props: {
    type: {
      type: String,
      default: 'text'
    },

    value: {
      type: String,
      default: null,
    },

    label: {
      type: String
    },

    placeholder: {
      type: String,
      default: null,
    },

    classes: {
      type: Array,
      default: () => {
      }
    }
  },
  // watch: {
  //   modelValue(newVal) {
  //     this.$emit('input', newVal)
  //   },
  //   value(newVal) {
  //     this.modelValue = newVal
  //   },
  // },
  // created() {
  //   this.modelValue = this.value
  // },
}
</script>

<style scoped>
.input-style{
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>