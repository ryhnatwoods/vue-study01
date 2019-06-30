<template>
  <div id="child1">
    <h2>Child1</h2>
    <p>{{title}}</p>
    <h3>{{msg}}</h3>
    <button @click="toParent">传递到父元素</button>
    <button @click="$broadcast('broadcast', '我是child1')">广播子元素</button>
    <grand-child1></grand-child1>
    <grand-child2></grand-child2>
  </div>
</template>

<script>
import GrandChild1 from "./GrandChild1.vue";
import GrandChild2 from "./GrandChild2.vue";

export default {
  name: "child1",
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
    GrandChild1,
    GrandChild2
  },
  methods: {
    toParent() {
      //触发getmsg事件，并传递当前组件的信息
      this.$emit("getmsg", "daddy, i got my fault!");
    }
  },
  mounted() {
    //在虚拟节点完成挂载之后，绑定事件，事件可以绑定在事件总线上，也可以绑定在根组件上
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch消息：" + msg;
    });
    this.$bus.$on("event-bus", msg => {
      this.msg = "接收event-bus消息：" + msg;
    });
  }
};
</script>

<style>
</style>
