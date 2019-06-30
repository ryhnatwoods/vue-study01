<template>
  <div id="grandchild2">
    <h2>Grand Child2</h2>
    <p>祖先元素提供的数据：{{data}}</p>
    <button @click="eventBus">$bus发布</button>
    <h3>{{msg}}</h3>
    <grand-grand-child1></grand-grand-child1>
  </div>
</template>

<script>
import GrandGrandChild1 from "./GrandGrandChild1.vue";
export default {
  name: "GrandChild2",
  components: {
    GrandGrandChild1
  },
  inject: ["data"],
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    eventBus() {
      this.$bus.$emit("event-bus", "测试event-bus来自grandchild2");
    }
  },
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch消息：" + msg;
    });
    this.$on("broadcast", msg => {
      this.msg = "接收broadcast消息：" + msg;
    });
  }
};
</script>

<style>
</style>
