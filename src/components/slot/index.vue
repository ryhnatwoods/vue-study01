<template>
  <div id="slot_sample">
    <Comp1>匿名插槽</Comp1>
    <Comp2>
      <template v-slot:default>具名插槽</template>
      <template v-slot:content>内容...</template>
    </Comp2>
    <Comp3>
      <template v-slot:default="ctx">来自子组件数据： {{ctx.foo}}</template>
    </Comp3>
  </div>
</template>

<script>
import Comp1 from "./comp1.vue";
import Comp2 from "./comp2.vue";
import Comp3 from "./comp3.vue";
export default {
  components: {
    Comp1,
    Comp2,
    Comp3
  }
};
</script>

<style>
</style>
