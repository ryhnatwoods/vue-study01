<template>
  <li>
    <div @click="toggle">
      <span>{{model.title}}</span>
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <Item class="item" v-for="model in model.children" :key="model.title" :model="model"></Item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length > 0;
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
</style>
