<template>
  <div id="grandchild1">
    <h2>Grand Child1</h2>
    <p>祖先元素提供的数据：{{data}}</p>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: "GrandChild1",
  data() {
    return {
      msg: ""
    };
  },
  inject: ["data"],
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch的消息" + msg;
    });
    this.$on("broadcast", msg => {
      this.msg = "接收broadcast的消息" + msg;
    });
    this.$on("event-bus", msg => {
      this.msg = "接收event-bus的消息" + msg;
    });
  }
};
</script>

<style>
</style>
