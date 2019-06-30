<template>
  <div id="comp3">
    <h3>作用域插槽</h3>
    <slot :foo="foo"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: "bar"
    };
  }
};
</script>

