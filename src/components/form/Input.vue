<template>
  <div id="forminput">
    <input :value="value" @input="oninput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    oninput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style>
</style>
