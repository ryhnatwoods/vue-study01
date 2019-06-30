<template>
  <div id="app">
    <ul>
      <Item class="item" :model="model"></Item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item
  },
  data() {
    return {
      model: {
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
