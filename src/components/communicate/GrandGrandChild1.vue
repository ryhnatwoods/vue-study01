<template>
  <div id="grandgrandchild1">
    <h2>Grand Grand Child1</h2>
    <p>祖先元素提供的数据：{{data}}</p>
    <button @click="$dispatch('dispatch', 'halo, i am your lovely grand grand child1')">dispatch</button>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: "GrandGrandChild1",
  inject: ["data"],
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$on("broadcast", msg => {
      this.msg = "接收broadcast消息" + msg;
    });
    this.$on("event-bus", msg => {
      this.msg = "接收event-bus的消息" + msg;
    });
  }
};
</script>

<style>
</style>
