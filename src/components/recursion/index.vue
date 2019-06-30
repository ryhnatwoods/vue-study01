<template>
  <div id="recursion">
    <Node :data="data" />
  </div>
</template>

<script>
import Node from "./Node.vue";
export default {
  components: {
    Node
  },
  data() {
    return {
      data: {
        id: "jiangsu",
        title: "江苏省",
        children: [
          {
            id: "nanjing",
            title: "南京市",
            children: [
              {
                id: "xuanwu",
                title: "宣武区"
              },
              {
                id: "baixia",
                title: "白下区"
              }
            ]
          },
          {
            id: "suzhou",
            title: "苏州市"
          },
          {
            id: "zhenjiang",
            title: "镇江市"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
