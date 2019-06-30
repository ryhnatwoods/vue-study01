<template>
  <div id="app">
    <h2>Parent</h2>
    <h3>{{msg}}</h3>
    <Child1 :title="title" @getmsg="getmsg"></Child1>
    <Child2 @getmsg="getmsg"></Child2>
  </div>
</template>

<script>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
export default {
  name: "app",
  provide: {
    data: "This is Jerry"
  },
  data() {
    return {
      msg: "",
      title: "this is your daddy"
    };
  },
  methods: {
    //绑定getmsg事件在子组件上，以便于接收子组件发布的信息，相当于注册订阅一个事件在子组件，方便子组件向父组件传递信息
    getmsg(msg) {
      this.msg = msg;
    }
  },
  components: {
    Child1,
    Child2
  },
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch消息：" + msg;
    });
    this.$on("event-bus", msg => {
      this.msg = "接收event-bus消息：" + msg;
    });
  }
};
</script>

<style scoped>
div {
  border: 3px solid blue;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
}
h1,
h2 {
  font-size: 18px;
  margin: 5px 0;
}
h3 {
  color: red;
  font-size: 14px;
}
</style>
