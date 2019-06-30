
<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to your vue.js App" ref="hw" /> -->
    <!-- <Communicate msg="Welcome to your vue.js App" ref="comm" /> -->
    <!-- <Form /> -->
    <!-- <Slot /> -->
    <!-- <Recursion /> -->
    <Tree />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
//import Communicate from "./components/communicate/index.vue";
// import Form from "./components/form/index.vue";
// import Slot from "./components/slot"
// import Recursion from "./components/recursion";
import Tree from "./components/tree";
export default {
  components: {
    // HelloWorld
    // Communicate
    // Form
    // Slot
    // Recursion
    Tree
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
