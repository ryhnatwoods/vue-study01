<template>
  <div id="child2">
    <h2>{{title}}</h2>
    <h3>{{msg}}</h3>
    <button @click="toParent">传递到父元素</button>
    <grand-child1></grand-child1>
  </div>
</template>

<script>
import GrandChild1 from "./GrandChild1.vue";
export default {
  name: "Child2",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  components: {
    GrandChild1
  },
  methods: {
    toParent() {
      this.$emit("getmsg", "Mon Pere, C'est Mon Fault");
    }
  },
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch的消息：" + msg;
    });
  }
};
</script>

<style>
</style>
